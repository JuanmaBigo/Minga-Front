import React, { useState } from 'react'
import './cardsManga.css'
import { useNavigate } from 'react-router'
import DeleteMyMangas from '../DeleteMyMangas/DeleteMyMangas'
import EditMyMangas from '../EditMyMangas/EditMyMangas'

export default function CardsManga(props) {

  let [ modalDelete, setModalDelete ] = useState(false)
  let [ modalEdit, setModalEdit ] = useState(false)
  let navigate = useNavigate()

  function handleNavegate(){
    navigate(`/manga/${props._id}/1`)
  }

  const showModalDelete = () => setModalDelete(!modalDelete)
  const showModalEdit = () => setModalDelete(!modalEdit)


  return (
    <div className='card'>
      <span className={`span-card ${props.category_.name.includes('shonen') ? 'red-span' : props.category_.name.includes('comic')?'orange-span':props.category_.name.includes('shojo')?'green-span':props.category_.name.includes('seinen')?'purple-span':''}` }></span>
      <div className='inf-card'>
        <h2 className='title-card'>{props.title_}</h2>
        <h3 className={`type-card ${props.category_.name.includes('shonen') ? 'red-type' : props.category_.name.includes('comic')?'orange-type':props.category_.name.includes('shojo')?'green-type':props.category_.name.includes('seinen')?'purple-type':''}`}>{props.category_.name}</h3>
        <div className='buttons'>
          <button onClick={handleNavegate} className='btn-read'>Read</button>
          <button  onClick={showModalEdit} className='btn-edit'>Edit
          {
            (modalEdit) ? (<EditMyMangas />) : (null)
          }
          </button>
          <button onClick={showModalDelete}  className='btn-delete'>Delete
          {
            (modalDelete) ? (<DeleteMyMangas />) : (null)
          }
          </button>
        </div>
      </div>
      <img className='img-card' src={props.photo} alt="naruto" />
    </div>
  )
}
