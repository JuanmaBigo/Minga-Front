import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './modaledit.css'
import modalEdit from '../../store/ModalEdit/actions'
import closeIcon from '../../assets/img/Union.png'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import apiUrl from '../../configHost'



export default function ModalEdit() {

    
    const dispatch = useDispatch()
    const { showModalEdit } = modalEdit
    let [ mangaEdit , setMangaEdit ] = useState({})
    let manga_id = useSelector(store => store.showModalEdit.id)

    let url = apiUrl + 'mangas/'
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}`}}
    
    let title = useRef()
    let description = useRef()
    let cover_photo = useRef()
    
    
    const handleClose = () => {
        dispatch(showModalEdit({ state: false}))
    }
    
    const handleSubmit = async (e) => {
        let data = {
            title: title.current.value,
            description: description.current.value,
            cover_photo: cover_photo.current.value 
        }
        e.preventDefault()
        try {
            axios.put(url+manga_id,data,headers) 
            toast.success('Manga successfully edited')
            setTimeout( () => { handleClose()}, 1000 )
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    
    useEffect(
        () => {
            axios.get( url+manga_id, headers )
                .then( response => setMangaEdit(response.data.manga) )
        },
        [ manga_id]
    )


    return (
        <div className='edit-modal'>
            <div className='edit-title'>
                <h2>Edit</h2>
                <img onClick={handleClose} src={closeIcon} />
            </div>
            <form className='manga-form' onSubmit={handleSubmit}>
                <input className='manga-input' type='text' placeholder='Inster title' defaultValue={mangaEdit.title} ref={title}  />
                <input className='manga-input' type='text' placeholder='Descrption' defaultValue={mangaEdit.description} ref={description}  />
                <input className='manga-input' type='text' placeholder='Insert a Cover_photo' defaultValue={mangaEdit.cover_photo} ref={cover_photo}   />
                <input className='send-Btn' type='submit' value='Send' />
            </form>
            <Toaster />
        </div>
    )
}
