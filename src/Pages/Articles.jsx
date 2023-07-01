import React from 'react'
import articles from '../assets/articles.svg'

const Articles = () => {
  return (
    <section className='article'>
      <h3>Stay tune for latest articles...😊</h3>
      <img src={articles} alt="articles" />
    </section>
  )
}

export default Articles
