import React from 'react'
import './staticcardmymangas.css'
import kameHouse from '../../assets/img/kame-house.webp'
import { Link } from 'react-router-dom'
import addicon from '../../assets/img/Addicon2.png'

export default function StaticCardMyMangas() {
    return (
        <div className='card'>
        <div className='inf-card'>
            <h2 className='title-card'>Create New Manga</h2>
        </div>
        <div id='imagen' className='img-card'>
            <Link to={`/manga-form`}><img className='add' src={addicon} /></Link>
        </div>
    </div>
    )
}
