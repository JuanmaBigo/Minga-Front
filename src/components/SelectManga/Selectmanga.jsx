import axios from 'axios';
import React from 'react'
import './selectmanga.css'
import { useState, useEffect } from 'react';
import apiUrl from '../../configHost';


export default function Selectmanga(props) {

    let url = apiUrl + 'mangas/category-manga'

    let [ categories, setCategories ] = useState([])
        useEffect(
            () => {
                axios.get(url)
                .then( response => setCategories( response.data.categories ) )
                .catch(e => {
                console.log(e);
            })
            },
            [url]
        )
        return (
            <select  name={props.name} ref={props.parentref} className='selectmanga'>
                <option value=''>Insert category</option>
                {
                    categories.map( ( cat ) => (
                        <option id={cat._id}  key={cat.name} value={cat._id}> {cat.name} </option>
                    ))
                }
            </select>
            
    )
}
