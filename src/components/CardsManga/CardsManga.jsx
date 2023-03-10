import React from 'react'
import './cardsManga.css'
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function CardsManga(props) {
  let url = `http://localhost:8080/api/mangas/type-category?_id=${props.category_}`

  let [ categories, setCategories ] = useState([])
  useEffect(
      () => {
          axios.get(url)
          .then( response => setCategories( response.data.categories[0].name) )
          .catch(e => {
          console.log(e);
      })
      },
      [url]
  )
  return (
    <div className='card'>
      <span className='span-card'></span>
      <div className='inf-card'>
        <h2 className='title-card'>{props.title_}</h2>
        <h3 className='type-card'>{categories}</h3>
        <button className='btn-card'>Read</button>
      </div>
      <img className='img-card' src={props.photo} alt="naruto" />
    </div>
  )
}
