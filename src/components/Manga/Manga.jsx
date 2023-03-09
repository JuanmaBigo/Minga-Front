import React from 'react'
import './manga.css'
import search from '../../assets/img/Search.png'
import CardsManga from '../CardsManga/CardsManga'
import ChecksManga from '../ChecksManga/ChecksManga'
import TypeManga from '../TypeManga/TypeManga'

export default function Manga() {
  return (
    <div className='manga'>
        <div className='search-manga'>
            <h2 className='name-page'>Manga</h2>
            <div className='cont-searh-manga'>
                <img className='img-search' src={search} alt="search" />
                <form className='form-search' >
                    <input className='input-search' type="text" name="title" id="title" placeholder='Find your manga here' />
                </form>
            </div>
        </div>
        <div className='card-manga'>
            <div className='cont-checks'>
                <TypeManga/>
                <ChecksManga/>
            </div>
            <div className='cont-cards'>
                <CardsManga/>
                <CardsManga/>
                <CardsManga/>
                <CardsManga/>
                <CardsManga/>
                <CardsManga/>
            </div>
            <div className='page-manga'>
                <button className='btn-prev'>Prev</button>
                <button className='btn-next'>Next</button>
            </div>
        </div>
    </div>
  )
}
