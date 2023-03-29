import React from 'react'
import './joinauthor.css'
import image1 from '../../assets/img/author-1.png'
import image2 from '../../assets/img/author-2.png'
import image3 from '../../assets/img/author-3.png'
import { useNavigate } from 'react-router-dom'

export default function JoinAuthor() {

    let navigate = useNavigate()
    let handleClick = () => navigate('/author-form')

    return (
    <div className='JoinAuthor' onClick={handleClick}>
        <div className='images-author'>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
        </div>
        <div className='text-author'>
            <span>Join as an Author!</span>
            <p>I'm a reader writting a manga</p>
        </div>
    </div>                                                         
    )
}
