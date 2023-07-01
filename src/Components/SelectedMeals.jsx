import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { search_Meal_By_ID as url } from '../../Utils/constants'
import { AppContext } from './Context'
import AddToCart from './AddToCart'

const SelectedMeals = () => {

    const { selected_Meals: mealItems, fetchSelectMeal } = useContext(AppContext);
    const { id } = useParams();
    const { _id, title, image, category, description, price } = mealItems;

    useEffect(() => {
        fetchSelectMeal(`${url}${id}`)
    }, [id])

    return (
        <section className='selected-meals'>
            <div className='col-4'>
                <img src={image} alt={title} />
            </div>
            <div className='col-8'>
                <h1>{title}</h1>

                <h3>{category}</h3>
                <h4> &#8377; {price}</h4>

                <h6>{description}</h6>
                <span>
                    <AddToCart mealItems={mealItems} />
                </span>
            </div>

        </section>
    )
}

export default SelectedMeals
