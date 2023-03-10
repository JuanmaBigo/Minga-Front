import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './chapters.css'


export default function Chapters() {

    let navigate = useNavigate()
    let url = `http://localhost:8080/api/chapters/`
    let { id, page} = useParams()    
    let [ chapter, setChapter ] = useState({})
    let [ index, setIndex ] = useState(parseInt(page))

        useEffect(
            () => {
                axios.get(url+id)
                .then( response => setChapter(response.data.chapter))
                .catch(error => console.log(error))
            },
            []
        ) 
        console.log(chapter);
        let handlePrev = () => {
            setIndex( index - 1)
            navigate(`/chapters/${id}/${index - 1}`) 
            if( index <= 0){
                navigate(`/mangas/${id}/${1}`)
            }

        }
        let handleNext = () => {
            setIndex( index + 1)
            navigate(`/chapters/${id}/${index + 1}`) 
            if( index > chapter.pages?.length){
                axios.get()
            }
        }

    return (
    <div className='chapters'>
        <div className='prev' onClick={handlePrev}>
            <img src='../../image/flecha prev.png' alt='prevarrow'/>
        </div>
        <img className='image' src={chapter.pages?.[index]} alt='comicimage'/>
        <div className='next' onClick={handleNext}>
            <img src='../../image/flecha next.png' alt='nextarrow'/>
        </div>
    </div>
    )
}
