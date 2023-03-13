import React from 'react'
import './ChapterComponent.css'
import icon_comment from '../../../../../assets/img/icon_comment.png'
import { useNavigate } from 'react-router'


export default function ChapterComponent(props) {

    const chapter = { ...props }
    const comments = Math.floor(Math.random() * 200)

    let navigate = useNavigate()

    function handleNavigate() {
        navigate(`/chapters/${chapter._id}/0`)
    }

    return (
        <div className='chapter-component'>
            <img src={chapter.cover_photo} />
            <div className='chapter-info'>
                <p>{chapter.title}</p>
                <div className='chapter-comments'>
                    <img src={icon_comment} />
                    <p>{comments}</p>
                </div>
            </div>
            <button className='read-button' onClick={handleNavigate}>Read</button>
        </div>

    )
}





