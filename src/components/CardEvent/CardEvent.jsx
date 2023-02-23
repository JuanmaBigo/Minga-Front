import React from 'react'
import './cardEvent.css'

export default function CardEvent({ data }) {
  return (
    <a href="#" class="card-box">
        <article>
            <h3 class="card-text">{data.name}</h3>
            <img src={data.image} class="card-img" />
            <p class="card-text">{data.category} - {data.date}</p>
            <p class="card-text">{data.assistance ? 'assistance: '+data.assistance : 'estimate: '+data.estimate}</p>
        </article>
    </a>
  )
}
