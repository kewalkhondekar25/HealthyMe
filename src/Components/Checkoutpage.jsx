import React, { useContext } from 'react'
import { AppContext } from './Context'
import axios from 'axios'
import { FaCcMastercard } from 'react-icons/fa'
import { RiVisaFill } from 'react-icons/ri'
import {SiPhonepe} from 'react-icons/si'
import {SiGooglepay} from 'react-icons/si'
import {FaApplePay} from 'react-icons/fa'
import {SiPaytm} from 'react-icons/si'



const Checkoutpage = () => {

  const { total_amount, user } = useContext(AppContext)

  const checkOutHandler = async (total_amount, user) => {

    const { data: { key } } = await axios.get("https://www.itehealthyme.in/api/getkey")
    const { data: { order } } = await axios.post('https://www.itehealthyme.in/api/checkout', {
      total_amount,
      user
    })
    console.log(order);
    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      //name: order.user.name,
      description: "Test Transaction",
      image: "https://healthyme-logo.nyc3.cdn.digitaloceanspaces.com/authLogo.png",
      order_id: order.id,
      callback_url: "https://www.itehealthyme.in/api/paymentverification",
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9999988888"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#154726"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();

  }
  return (
    <section className='checkout-pg'>
      <button onClick={() => checkOutHandler(total_amount, user)}>Pay Now</button>
      <table className='table table-hover caption-top'>
        <caption>Test Card & UPI Details for Successfull Payment</caption>
        <thead>
          <tr>
            <th>Payment Network</th>
            <th>Card Number	</th>
            <th>CVV</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FaCcMastercard /> Mastercard IND</td>
            <td>5267 3181 8797 5449</td>
            <td>Random CVV</td>
            <td>Any future date</td>
          </tr>
          <tr>
            <td> <RiVisaFill /> Visa IND</td>
            <td>4111 1111 1111 1111</td>
            <td>Random CVV	</td>
            <td>Any future date</td>
          </tr>
          <tr>
            <td><FaCcMastercard /> Mastercard International</td>
            <td>5555 5555 5555 4444</td>
            <td>Random CVV	</td>
            <td>Any future date</td>
          </tr>
          <tr>
            <td> <RiVisaFill /> Visa International</td>
            <td>4012 8888 8888 1881</td>
            <td>Random CVV	</td>
            <td>Any future date</td>
          </tr>
          <tr>
            <td> UPI</td>
            <td> <SiPhonepe/> <SiGooglepay/> <FaApplePay/> <SiPaytm/> </td>
            <td>success@razorpay</td>
            <td>---</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Checkoutpage
