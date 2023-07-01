import React from 'react'
import pic from '../assets/meals2.jpg'

const About = () => {
  return (
    <section className='about'>
      <main>
        <div>
          <img src={pic} alt="img" />
          <h1>How HealthyMe Works</h1>
          <p>We at HealthyMe! delivered bright and early each weekday; guaranteed to be on your doorstep by 11 a.m.
            We simply drop your meals off in your specified address. Your meals are there ready and waiting for you to take with you,
            it’s easy and convenient!
            <br />
            Our nourishing plant-based meals includes lots of fruit, vegetables, whole grains and a moderate amount of unsaturated fats,
            and dairy-free can help you maintain a steady weight. Having a good variety of these foods every day leaves less room
            for foods that are high in fat and sugar - a leading cause of weight gain.
          </p>
        </div>
      </main>
    </section>
  )
}

export default About
