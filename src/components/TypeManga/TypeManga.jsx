import React from 'react'
import './typeManga.css'

export default function TypeManga() {
  return (
    <div className='typeMangas'>
        <h2 className='name-typemanga'>Explore</h2>
        <div className='cont-btn'>
            <button className='btn-adventure'>Adventurers</button>
            <button className='btn-nostalgic'>Nostalgic</button>
            <button className='btn-popular'>Popular</button>
        </div>
    </div>
  )
}
