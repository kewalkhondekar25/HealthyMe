import React from 'react'
import loading from '../assets/undraw-loading.svg'
import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
  return (
    <section className='loading-page'>
        <img className='loading-img' src={loading} alt="loading" />   
        <h1>Loading</h1> 
            <PulseLoader
                className='load'
                color="#154726"
                size={10}
            />    
    </section>
  )
}

export default Loading
