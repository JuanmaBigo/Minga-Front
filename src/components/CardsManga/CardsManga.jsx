import React from 'react'
import './cardsManga.css'


export default function CardsManga(props) {

  return (
    <div className='card'>
      <span className='span-card'></span>
      <div className='inf-card'>
        <h2 className='title-card'>{props.title_}</h2>
        <h3 className='type-card'>{props.category_.name}</h3>
        <button className='btn-card'>Read</button>
      </div>
      <img className='img-card' src={props.photo} alt="naruto" />
    </div>
  )
}
