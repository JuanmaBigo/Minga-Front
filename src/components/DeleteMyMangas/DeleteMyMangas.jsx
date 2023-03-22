import React from 'react'
import './deletemymangas.css'
import { Toaster, toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import axios from 'axios'


export default function DeleteMyMangas() {

    let id = useSelector( store => store.getmangas.mangas[0]._id )
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}`}}
    let url = `http://localhost:8080/api/mangas/${id}`
    
    const handleDelete = async () => {
        try {
            await axios.delete(url,headers)
            toast.success('Manga Successfully Deleted')
        } catch (error) {
            if (error.response){
                if( typeof error.response.data.message == 'string'){
                    toast.error(error.response.data.message)
                }
            }
            else {
                toast.error(error.message)
            }
        }
    }

    return (
        <div className='delete-modal'>
            <h2>Delete this manga?</h2>
            <div className='modal-btns'>
                <p onClick={handleDelete}>Delete</p>
                <p >Cancel</p>
            </div>
            <Toaster />
        </div>
    )
}
