import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './chapters.css'


export default function Chapters() {

    let navigate = useNavigate()
    let url = `http://localhost:8080/api/chapters/`
    let { id, page } = useParams()    
    let [ chapter, setChapter ] = useState({})
    let [ next, setNext ] = useState('')
    let [ prev, setPrev ] = useState('')
    let [ index, setIndex ] = useState(parseInt(page))

        useEffect(
            () => {
                axios.get(url+id)
                .then( response => { 
                    setChapter( response.data.chapter)
                    setPrev(response.data.prev);
                    setNext( response.data.next)
                })
                .catch(error => console.log(error))
            },
            []
        ) 

        let handlePrev = () => {
            setIndex( index - 1)
            navigate(`/chapters/${id}/${index - 1}`) 
            if( index <= 0 && chapter.order == 1){
                navigate(`/manga/${chapter.manga_id}/${1}`)
            }
            else if( index <= 0 ) {
                navigate(`/chapters/${prev}/0`)
                window.location.reload(true)
            }
        }
        let handleNext = (e) => {
            setIndex( index + 1)
            navigate(`/chapters/${id}/${index + 1}`) 
            if( index >= chapter.pages.length-1){
                navigate(`/chapters/${next}/0`)
                window.location.reload(true)    
            }
        }

    return (
    <div className='conteiner' >
            <div className='title'>
                <h4>Cap N° {chapter.order} - {chapter.title}</h4>
            </div>
            <div className='chapters'>
            <div className='prev' onClick={handlePrev}>
                <img src='../../image/flecha prev.png' alt='prevarrow'/>
            </div>
            <img className='image' src={chapter.pages?.[index]} alt='comicimage'/>
            <div className='next' onClick={handleNext}>
                <img src='../../image/flecha next.png' alt='nextarrow'/>
            </div>
        </div>
    </div>
    )
}
