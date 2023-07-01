import React from 'react'
import SocialMedia from '../Components/SocialMedia'
import socials from '../assets/socials.svg'

const ContactUs = () => {
  return (
    <section className='contact-us'>
        <img src={socials} alt="socials" />
      <SocialMedia/>
    </section>
  )
}

export default ContactUs
