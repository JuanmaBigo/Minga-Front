import React from 'react'
import './cardsmymangas.css'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import modalDelete from '../../store/ModalDelete/actions'
import modalEdit from '../../store/ModalEdit/actions'
import addicon from '../../assets/img/Addicon.png'
import editicon from '../../assets/img/Editicon.png'
import { Link } from 'react-router-dom'


export default function CardsManga(props) {

    let navigate = useNavigate()
    let dispatch = useDispatch()

    const { showDeleteModal } = modalDelete
    const { showModalEdit } = modalEdit 


    const handleRead = () =>{
        navigate(`/manga/${props._id}/1`)
    }

    const handleEdit = (e) => {
        dispatch( showModalEdit({
            state: true,
            id: e.target.id
        }))
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
            <div className='div-links'>
            <Link to={`/chapter-form/${props._id}`} ><img src={addicon} /></Link>
            <Link to={`/edit/${props._id}`} ><img src={editicon} /></Link>
            </div>
            <h2 className='title-card'>{props.title_}</h2>
            <h3 className={`type-card ${props.category_.name.includes('shonen') ? 'red-type' : props.category_.name.includes('comic')?'orange-type':props.category_.name.includes('shojo')?'green-type':props.category_.name.includes('seinen')?'purple-type':''}`}>{props.category_.name}</h3>
        <div className='buttons'>
            <button onClick={handleRead} id={props._id} className='btn-read'>Read</button>
            <button onClick={handleEdit} id={props._id} className='btn-edit'>Edit</button>
            <button onClick={handleDelete} id={props._id} className='btn-delete'>Delete</button>
        </div>
        </div>
        <img className='img-card' src={props.photo} alt="naruto" />
    </div>
    )
}
