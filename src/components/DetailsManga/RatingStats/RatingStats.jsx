import React from 'react'
import './RatingStats.css'

export default function (props) {
    return (
        <div className='rating-stats'>
            <div className='component-rating rate-line'>
                <div className='rating-1'>4.5/5</div>
                <div className='rating-2'>Rating</div>
            </div>
            <div className='component-rating rate-line'>
                <div className='rating-1'>{props.chapterCount}</div>
                <div className='rating-2'>Chapters</div>
            </div>
            <div className='component-rating'>
                <div className='rating-1'>Eng</div>
                <div className='rating-2'>Language</div>
            </div>
        </div>
    )
}
