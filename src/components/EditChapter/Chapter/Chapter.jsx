import React, { useEffect, useRef } from 'react'
import './Chapter.css'
import { useSelector } from 'react-redux';
import mangasActions from '../../../store/Mangas/actions';
const { read_manga, get_chapter } = mangasActions;




export default function Chapter() {
    let chapter = useSelector(store => store.mangas.chapter)

    return (
        <div className='chapter'>
            {chapter.title? <h2>Chapter #{`${chapter.order} - ${chapter.title}`}</h2> : ''}
            <img src={chapter.cover_photo}/>
        </div>
    )
}
