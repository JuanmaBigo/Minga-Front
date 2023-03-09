import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './chapters.css'


export default function Chapters() {

    let url = `http://localhost:8080/api/chapters/`
    let { id, page} = useParams()    
    let [ chapterPages, setChapterPages ] = useState([])

        useEffect(
            () => {
                axios.get(url+id)
                .then( response => setChapterPages(response.data.chapter.pages))
                .catch(error => console.log(error))
            },
            []
        )        
    
    return (
    <div className='chapters'>
        <img className='imagen' src={chapterPages[page]}></img>
    </div>
    )
}
