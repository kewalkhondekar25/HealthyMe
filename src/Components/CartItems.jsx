import React, { useContext } from 'react'
import { AppContext } from './Context'
import AmountButtons from './AmountButtons';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const CartItems = ({ _id, title, price, image, amount }) => {
  const { removeMeal, increaseAmount, decreaseAmount } = useContext(AppContext);



  return (
    <section className='all-cart-items'>
      <Card sx={{ maxWidth: '100vw', }}>
        <CardActionArea>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <CardMedia
              component={'img'}
              height='200'
              width='150'
              image={image}
            />
            <CardContent>
              <Typography variant='h6'>
                {title}
                <br />
                &#8377; {price}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography className='Qtys' variant='h6'>
                Qty:{amount}
              </Typography>
            </CardContent>
            <CardActions>
              <AmountButtons _id={_id} amount={amount} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} />
            </CardActions>
            <CardActions>
              <DeleteIcon color='error'  onClick={() => { removeMeal(_id) }} />
            </CardActions>
          </Box>
        </CardActionArea>
      </Card>
      <div>
      
      </div>
    </section>
  )
}

export default CartItems
