import React from 'react'
import './DetailsMain.css'
import { useSelector } from 'react-redux';


export default function DetailsMain() {

    let manga = useSelector(store => store.events.manga)

    return (
        <div className='details-main'>
            <img src={manga.cover_photo} />
            <h1>{manga.title}</h1>
            <div className='category-details'>
                <h3>Category</h3>
                <p>Company Name</p>
            </div>
        </div>
    )
}
