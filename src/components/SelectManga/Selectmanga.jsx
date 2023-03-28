import axios from 'axios';
import React from 'react'
import './selectmanga.css'
import { useState, useEffect } from 'react';
import apiUrl from '../../configHost';


export default function Selectmanga(props) {

<<<<<<< HEAD
    let url = apiUrl + 'mangas/category-manga'
=======
    let url = 'http://localhost:8080/api/mangas/category-manga'
>>>>>>> 58f4002560a68c80a495d830a5e1fee1af66901f

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
