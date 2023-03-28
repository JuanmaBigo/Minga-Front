import React from 'react'
import './cardsManga.css'
import { useNavigate } from 'react-router'



export default function CardsManga(props) {

    let navigate = useNavigate()
    
    const handleRead = () =>{
      navigate(`/manga/${props._id}/1`)
    }
    
  return (
    <div className='card'>
      <span className={`span-card ${props.category_.name.includes('shonen') ? 'red-span' : props.category_.name.includes('comic')?'orange-span':props.category_.name.includes('shojo')?'green-span':props.category_.name.includes('seinen')?'purple-span':''}` }></span>
      <div className='inf-card'>
        <h2 className='title-card'>{props.title_}</h2>
        <h3 className={`type-card ${props.category_.name.includes('shonen') ? 'red-type' : props.category_.name.includes('comic')?'orange-type':props.category_.name.includes('shojo')?'green-type':props.category_.name.includes('seinen')?'purple-type':''}`}>{props.category_.name}</h3>
        <div className='buttons'>
          <button onClick={handleRead} className='btn-readManga'>Read</button>
        </div>
      </div>
      <img className='img-card' src={props.photo} alt="naruto" />
    </div>
  )
}
