import React from 'react'
import './layoutMain.css'
import LayoutHero from '../LayoutHero/LayoutHero'

export default function LayoutMain(props) {
  return (
    <div className="main-container">
      <LayoutHero>
        {props.children}
      </LayoutHero>
    </div>
  )
}
