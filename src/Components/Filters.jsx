import React, { useContext} from 'react'
import { AppContext } from './Context'
import meal1 from '../assets/meals1.jpg'

const Filters = () => {
    const { sort, updateSort, searchByName, select, updateSelect } = useContext(AppContext);

    return (
        <section className='filter-section'>
            <span>
                <img src={meal1} alt="meal1" />
                <div className='meal-title'>
                    Meals
                </div>
            </span>


            <div className='meal-search-bar'>
                <form className='input-bar'>
                    <input type="text" onChange={searchByName} placeholder='Search Your Favourite Meals' />
                    <span className=' bi bi-search'></span>
                </form>
            </div>

            <div className='filtering'>
                <div className='meal-select'>
                    <label htmlFor="select">Meal type</label>
                    <form>
                        <select className='select-bar' name="category" value={select} onChange={updateSelect} >
                            <option value="all">All Meals</option>
                            <option value="breakfast">BREAKFAST</option>
                            <option value="soup">SOUP</option>
                            <option value="salad">SALAD</option>
                            <option value="drink">DRINK</option>
                            <option value="main">MAIN</option>
                        </select>
                    </form>
                </div>

                <div className='sort-select'>
                    <label htmlFor="select">Sort</label>
                    <form>
                        <select className='sort-bar' name="sort" id="sort" value={sort} onChange={updateSort}>
                            <option>Sort By</option>
                            <option value="title">A to Z</option>
                            <option value="-title">Z to A</option>
                            <option value="-price">Price: Highest to Lowest</option>
                            <option value="price">Price: Lowest to Highest</option>
                        </select>
                    </form>
                </div>
            </div>



        </section>
    )
}

export default Filters
