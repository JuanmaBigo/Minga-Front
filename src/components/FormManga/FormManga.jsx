import React from 'react'
import './formmanga.css'
import SelectManga from '../SelectManga/Selectmanga'



export default function FormManga(props) {
    return (
        <div className='manga'>
            <h1>New Manga</h1>
            <form className='formManga'>
                <input type='text' placeholder='Insert title'/>
                <SelectManga />
                <input type='text' placeholder='Insert description'/>
                <input className='button' type='submit' value='Send' />
            </form>
            </div>
    )
}
