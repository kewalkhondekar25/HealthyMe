import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { meals_URL as url } from '../../Utils/constants';
import {BsArrowUpCircle} from 'react-icons/bs'
import Loading from '../Pages/Loading';

const MealsList = ({ meals }) => {


    /*TOP_SCROLL*/
    const clickToTop = ()=>{
        window.scrollTo(0,0)
    };


    return (
        <section className='meals d-flex flex-wrap justify-content-center'>
            <Link to='/shop'>
                < BsArrowUpCircle className='btn-up' onClick={clickToTop}/>
            </Link> 
            {
               
                meals.map(item => {
                    const { _id, title, image, category, description, price } = item;
                    return (
                        <article key={_id} className=' meals-content' >
                            <Link to={`/meals/${_id}`}>
                                <div className='meal-discp'>
                                    <img src={image} alt="img" />
                                    <div className='meal-title'>
                                        <div className='meal-tl'>
                                            {title}
                                        </div>
                                        <div className='meal-discp'>
                                            <div className='meal-cat'>
                                                {category}
                                            </div>
                                            <div className='meal-price'>
                                                &#8377; {price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default MealsList
