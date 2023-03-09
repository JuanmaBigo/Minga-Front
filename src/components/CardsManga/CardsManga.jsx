import React from 'react'
import './cardsManga.css'
import naruto from '../../assets/img/naruto.png'

export default function CardsManga() {
  return (
    <div className='card'>
      <span className='span-card'></span>
      <div className='inf-card'>
        <h2 className='title-card'>Naruto Volume 41</h2>
        <h3 className='type-card'>Type</h3>
        <button className='btn-card'>Read</button>
      </div>
      <img className='img-card' src={naruto} alt="naruto" />
    </div>
  )
}
