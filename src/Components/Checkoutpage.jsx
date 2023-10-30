import React, { useContext, useState } from 'react'
import { AppContext } from './Context'
import axios from 'axios'
import { FaCcMastercard } from 'react-icons/fa'
import { RiVisaFill } from 'react-icons/ri'
import {SiPhonepe} from 'react-icons/si'
import {SiGooglepay} from 'react-icons/si'
import {FaApplePay} from 'react-icons/fa'
import {SiPaytm} from 'react-icons/si'



const Checkoutpage = () => {

  const { total_amount, user } = useContext(AppContext);
  const [isLoaderVisible, setLoaderVisible] = useState(false);

  const handleSlider = () => {
    setLoaderVisible(!isLoaderVisible);
    console.log(isLoaderVisible);
  }

  const checkOutHandler = async (total_amount, user) => {

    const { data: { key } } = await axios.get("https://razor-pay-node-js-patch-2.vercel.app/api/getkey")
    const { data: { order } } = await axios.post('https://razor-pay-node-js-patch-2.vercel.app/api/checkout', {
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
      image: "https://res.cloudinary.com/ddhgokvc1/image/upload/v1697583467/Portfolio/HealthyMe/mylogo2_fjqxdc.png",
      order_id: order.id,
      callback_url: "https://razor-pay-node-js-patch-2.vercel.app/api/paymentverification",
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
      <button onClick={() => {handleSlider(), checkOutHandler(total_amount, user)}}>Pay Now</button>
      {
        isLoaderVisible && <span className='position-absolute spinner-border text-success top-50 start-50 mt-xxl-1  ' role="status"></span>
      }
      <table className='table table-hover caption-top'>
        <caption>Test Cards & UPI Details for Test Payment</caption>
        <thead>
          <tr>
            <th>Payment Network</th>
            <th>Card Number	</th>
            <th>CVV/UPI</th>
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
        {/*
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
        */}  
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
