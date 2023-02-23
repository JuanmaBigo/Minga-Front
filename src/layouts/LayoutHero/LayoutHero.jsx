import React from 'react'
import './layoutHero.css'

export default function LayoutHero(props) {
  return (
    <div class="hero-container">
        {props.children}
    </div>
  )
}
