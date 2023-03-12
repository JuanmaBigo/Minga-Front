import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './DetailsMain.css'


export default function DetailsMain(props) {
    let [manga, setManga] = useState([])
    
    useEffect(
        () => {
            axios.get(props.url)
                .then(function (response) {
                    setManga(response.data.manga)
                })
        },
        []
    )

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
