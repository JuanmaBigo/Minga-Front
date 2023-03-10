import React from 'react'
import './checksManga.css'
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function ChecksManga(props) {
  let url = 'http://localhost:8080/api/mangas/category-manga'

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

        let category_name=categories.map(cat => cat.name)
        let category_id=categories.map(cat => cat._id)
        
  
  return (
    <form className='form-checks' ref={props.parentref}>
        <label className='class-checks1' htmlFor="All">All</label>
        <input className='input-checks' type="checkbox" name="All" id="All" value='' />

        <label className='class-checks2' htmlFor={category_name[0]}>{category_name[0]}</label>
        <input className='input-checks' type="checkbox" name={category_name[0]} id={category_name[0]} value={category_id[0]}/>

        <label className='class-checks3' htmlFor={category_name[1]}>{category_name[1]}</label>
        <input className='input-checks' type="checkbox" name={category_name[1]} id={category_name[1]} value={category_id[1]}/>
        
        <label className='class-checks4' htmlFor={category_name[2]}>{category_name[2]}</label>
        <input className='input-checks' type="checkbox" name={category_name[2]} id={category_name[2]} value={category_id[2]}/>

        <label className='class-checks5' htmlFor={category_name[3]}>{category_name[3]}</label>
        <input className='input-checks' type="checkbox" name={category_name[3]} id={category_name[3]} value={category_id[3]}/>

    </form>
  )
}
