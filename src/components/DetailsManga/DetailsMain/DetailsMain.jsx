import React, { useRef } from 'react'
import './DetailsMain.css'
import { useSelector } from 'react-redux';


export default function DetailsMain() {
    let manga = useSelector(store => store.events.manga)

    let category = manga.category_id?.name;
    let company = manga.company_id?.name;


    return (
        <div className='details-main'>
            <img src={manga.cover_photo} />
            <h1>{manga.title}</h1>
            <div className='category-details'>
                <h3 className={category}>{category}</h3>
                <p>{company}</p>
            </div>
        </div>
    )
}
