import React from 'react'
import './layoutHero.css'

export default function LayoutHero(props) {
  return (
    <div className="hero-container">
        {props.children}
    </div>
  )
}
