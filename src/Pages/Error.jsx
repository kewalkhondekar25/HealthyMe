import React from 'react'
import err from '../assets/undraw_page_not_found_re_e9o6.svg'

const Error = () => {
  return (
    <section className='error-page'>
      <img src={err} alt="err" />
      <h1>Page you requested do not found</h1>
    </section>
  )
}

export default Error
