import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const AmountButtons = ({ _id, amount, increaseAmount, decreaseAmount}) => {
  return (
    <div>
      <div className='btn-amount'>
        <KeyboardArrowLeftIcon onClick={() => { decreaseAmount(_id) }} />
        {amount}
        <KeyboardArrowRightIcon onClick={() => { increaseAmount(_id) }}/>
      </div>
    </div>
  )
}

export default AmountButtons
