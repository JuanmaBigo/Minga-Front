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
        return (
            <select  name={props.name} ref={props.parentref} className='selectmanga'>
                <option value=''>Insert category</option>
                {
                    categories.map( ( cat ) => (
                        <option id={cat._id}  key={cat.name} value={cat.name}> {cat.name} </option>
                    ))
                }
            </select>
            
    )
}
