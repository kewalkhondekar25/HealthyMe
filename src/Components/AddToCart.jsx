import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './Context'

const AddToCart = ({ mealItems }) => {

  const { addToCart } = useContext(AppContext);
  const { _id, title, image, category, description, price } = mealItems;
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <Link to='/cart'>
        <button className='btn-cart'
          onClick={() => addToCart(_id, title, image, category, description, price, amount)}>
          Add To Cart
        </button>
      </Link>

    </div>
  )
}

export default AddToCart
