import React from 'react'
import './cardsManga.css'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import modalDelete from '../../store/ModalDelete/actions'


export default function CardsManga(props) {

    let navigate = useNavigate()
    let dispatch = useDispatch()

    const { showDeleteModal } = modalDelete


    const handleRead = () =>{
      navigate(`/manga/${props._id}/1`)
    }

    const handleDelete = (e) => {
      dispatch( showDeleteModal({
        state: true,
        id: e.target.id
      }))
    }
    
  return (
    <div className='card'>
      <span className={`span-card ${props.category_.name.includes('shonen') ? 'red-span' : props.category_.name.includes('comic')?'orange-span':props.category_.name.includes('shojo')?'green-span':props.category_.name.includes('seinen')?'purple-span':''}` }></span>
      <div className='inf-card'>
        <h2 className='title-card'>{props.title_}</h2>
        <h3 className={`type-card ${props.category_.name.includes('shonen') ? 'red-type' : props.category_.name.includes('comic')?'orange-type':props.category_.name.includes('shojo')?'green-type':props.category_.name.includes('seinen')?'purple-type':''}`}>{props.category_.name}</h3>
        <div className='buttons'>
          <button onClick={handleRead} className='btn-read'>Read</button>
          <button className='btn-edit'>Edit</button>
          <button onClick={handleDelete} id={props._id}className='btn-delete'>Delete
          </button>
        </div>
      </div>
      <img className='img-card' src={props.photo} alt="naruto" />
    </div>
  )
}
