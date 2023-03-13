import React from 'react'
import './ChapterComponent.css'
import icon_comment from '../../../../../assets/img/icon_comment.png'

import img from '../../../../../assets/img/narutoprueba.png'

export default function ChapterComponent(props) {
    console.log(props)
    
    return (
        <div className='chapter-component'>
            <img src={img}/> 
            <div className='chapter-info'>
                <p>{chapter.title}</p>
                <div className='chapter-comments'>
                    <img src={icon_comment}/>
                    <p>169</p>
                </div>
            </div>
            <button className='read-button'>Read</button>
        </div>

    )
}
