import React from 'react'
import './Hero.css'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'

export default function Hero() {
    return (
        <div className='hero-container'>
        <Section1/>
        <Section2/>
        </div>
    )
}
