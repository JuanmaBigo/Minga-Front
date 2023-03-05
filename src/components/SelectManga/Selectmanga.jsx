import axios from 'axios';
import React from 'react'
import './selectmanga.css'
import { useState, useEffect } from 'react';



export default function Selectmanga() {

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
            <select  className='selectmanga'>
                <option>Insert category</option>
                {
                    categories.map( ( cat, i ) => (
                        <option key={cat} value={i}> {cat} </option>
                    ))
                }
            </select>
    )
}
