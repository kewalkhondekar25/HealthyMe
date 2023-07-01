import React, { useContext, useEffect, useState } from 'react'
import MealsList from './MealsList';
import { AppContext } from './Context';
import Loading from '../Pages/Loading';

import Filters from './Filters';


const Shop = () => {


    const { meals } = useContext(AppContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (

        <section className='shop-container'>
            {
                loading ?
                    <Loading /> :
                    <div>
                        <Filters />
                        <MealsList meals={meals} />
                    </div>
            }

        </section>


    )
}

export default Shop
