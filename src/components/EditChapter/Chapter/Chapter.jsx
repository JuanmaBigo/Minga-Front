import React, { useEffect, useRef } from 'react'
import './Chapter.css'
import { useSelector } from 'react-redux';
import mangasActions from '../../../store/Mangas/actions';
const { read_manga, get_chapter } = mangasActions;




export default function Chapter() {
    let chapter = useSelector(store => store.mangas.chapter)


    return (
        <div className='chapter'>
            <h2>{chapter.title}</h2>
            <p>añsdlfkañsldfjañsldkfjañsldfjkas dfñalskdjfña lskdjf asdñflkjas dñflkja sd</p>
        </div>
    )
}
