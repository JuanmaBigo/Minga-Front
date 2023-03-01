import React from 'react'
import './Section1.css'
import ButtonMain from '../ButtonMain/ButtonMain'

export default function Section1() {
    return (
        <section className='section-1'>
            <div className='text-container'>
                <h1>For the love of manga</h1>
                <h3>Explore our varieties</h3>
                <p>#MingaLove❤️</p>
                <ButtonMain class='btn-1' text='Let’s go!' />
            </div>
        </section>
    )
}
