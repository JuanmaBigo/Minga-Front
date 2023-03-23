import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './modaldelete.css'
import modalDelete from '../../store/ModalDelete/actions'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'


export default function ModalDelete() {

    const dispach = useDispatch()
    const { showDeleteModal } = modalDelete
    let manga_id = useSelector(store => store.showModalDelete.id)
    let token = localStorage.getItem('token')
    let headers = {  headers: { 'Authorization': `Bearer ${token}`}}
    let url = `http://localhost:8080/api/mangas/${manga_id}`


    const handleDelete = async () =>{
        try {
            axios.delete( url, headers )
            toast.success('Manga Successfully Deleted')
            setTimeout( () => { handleClose()}, 1000 )
        } catch (error) {
            toast.error(`Manga Wasn't deleted`)
        }
    }

    const handleClose = () =>{ 
        dispach(showDeleteModal({ state: false}))
    }

    return (
    <div className='delete-modal'>
            <h2>Delete this manga?</h2>
            <div className='modal-btns'>
                <p onClick={handleDelete}>Delete</p>
                <p onClick={handleClose}>Cancel</p>
            </div>
            <Toaster />
        </div>
    )
}
