import React from 'react'
import logo from '../assets/mylogo2.png'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom';
import ShortcutIcon from '@mui/icons-material/Shortcut';

const Footer = () => {

  const clickToTop = () => {
    window.scrollTo(0, 0)
  };

  return (
    <section>
      <div className='footer'>
        <div className='col-6'>
          <h1>Stay Healthy.</h1>
          <span className='subs'>Subscribe to HealthyMe updates.</span>
          <form action="https://formspree.io/f/mknaadbv" method="post">
            <input name='Email' id='email' autoComplete='true' type="email" placeholder='Enter your email here' />
            <button type='submit'><ShortcutIcon/></button>
          </form>

          <div className='footer-logo' onClick={clickToTop}>
            <img src={logo} alt="logo" />
            <span>HealthyMe</span>
            <br />
            <div className='reserve'>
              &copy;2023, HealthyMe
              <br />
              All rights reserved.
            </div>
          </div>
        </div>

        <div className='col-6'>
          <ul>
            <Link to='/about'>
              <li>How healthyMe Works?</li>
            </Link>
            <Link to='/articles'>
              <li>Articles</li>
            </Link>
            <Link to='/shop'>
              <li>ShopMeals</li>
            </Link>
            <Link to='/contact'>
              <li>Contact Us</li>
            </Link>
          </ul>
          <div className='footer-info'>
            <ul>
              <Link to='/faq'>
                <li>FAQ</li>
              </Link>
            </ul>
            <div className='footer-sm'>
              <SocialMedia />
            </div>
          </div>
        </div>
        <span className='notice'>
          This website is for educational purpose only
        </span>
      </div>
    </section>
  )
}

export default Footer
