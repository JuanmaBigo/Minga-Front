import React from 'react'
import './RatingStats.css'
import {useSelector} from 'react-redux' 

export default function () {
    
    let count = useSelector(store => store.events.count)


    return (
        <div className='rating-stats'>
            <div className='component-rating rate-line'>
                <div className='rating-1'>4.5/5</div>
                <div className='rating-2'>Rating</div>
            </div>
            <div className='component-rating rate-line'>
                <div className='rating-1'>{count}</div>
                <div className='rating-2'>Chapters</div>
            </div>
            <div className='component-rating'>
                <div className='rating-1'>Eng</div>
                <div className='rating-2'>Language</div>
            </div>
        </div>
    )
}
