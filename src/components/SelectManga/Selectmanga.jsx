import axios from 'axios';
import React from 'react'
import './selectmanga.css'
import { useState, useEffect } from 'react';


export default function Selectmanga(props) {

    let url = 'http://localhost:8080/mangas'

    let [ categories, setCategories ] = useState([])
        useEffect(
            () => {
                axios.get(url)
                .then( response => setCategories( response.data.categories ) )
                .catch(e => {
                console.log(e);
            })
            },
            []
        )
        categories = categories.map( item => item.name)
        
        return (
            <select name={props.name} ref={props.parentref} className='selectmanga'>
                <option value=''>Insert category</option>
                {
                    categories.map( ( cat ) => (
                        <option key={cat} value={cat}> {cat} </option>
                    ))
                }
            </select>
    )
    
}
