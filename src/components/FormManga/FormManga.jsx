import React from 'react'
import './formmanga.css'
import SelectManga from '../SelectManga/Selectmanga'
import { useRef } from 'react'
import axios from 'axios'
import {Toaster,toast} from 'react-hot-toast'
import apiUrl from '../../configHost'


export default function FormManga() {

    let title  = useRef()
    let category = useRef()
    let description = useRef()
    let photo = useRef()
    
    async function handleSubmit(e){
        e.preventDefault()

            let data = {
            [title.current.name]: title.current.value,
            [category.current.name]: category.current.value,
            [description.current.name]: description.current.value,
            [photo.current.name]:photo.current.value

        }

        let url = apiUrl + 'mangas'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        try {
            await axios.post(url,data,headers) 
            toast.success('Manga created susccesfully')
        } catch (error) {
            if(typeof error.response.data.message === 'string'){
                toast.error(error.response.data.message)
            }else{
                error.response.data.message.forEach(err => toast.error(err))
            }
        }
        e.target.reset()
    }
    return (
        <div className='manga-form' onSubmit={handleSubmit}>
            <h1>New Manga</h1>
            <form className='formManga'>
                <input className='input-manga' type='text' placeholder='Insert title' ref={title} name='title'/>
                <SelectManga  parentref={category} name='category_id' />
                <input className='input-manga' type='text' placeholder='Insert description' ref={description} name='description'/>
                <input className='input-manga' type='text' placeholder='Insert photo' ref={photo} name='cover_photo'/>
                <input className='submit' type='submit' value='Send' />
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            </div>
    )
}

