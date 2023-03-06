import React from 'react'
import './formmanga.css'
import SelectManga from '../SelectManga/Selectmanga'
import { useRef } from 'react'
import axios from 'axios'



export default function FormManga() {

    let tittle = useRef()
    let category = useRef()
    let description = useRef()
    
    async function handleSubmit(e){
        e.preventDefault()
        let data = {
            [tittle.current.name]: tittle.current.value,
            [category.current.name]: category.current.value,
            [description.current.name]: description.current.value
        }
        let url = 'http://localhost:8080/mangas'
        try {
            await axios.post(url,data) 
            alert('Manga created susccesfully')
        } catch (error) {
            console.log(error.response.data.response);
            alert(error.response.data.message)
        }
        e.target.reset()
    }

    return (
        <div className='manga' onSubmit={handleSubmit}>
            <h1>New Manga</h1>
            <form className='formManga'>
                <input type='text' placeholder='Insert tittle' ref={tittle} name='tittle'/>
                <SelectManga parentref={category} name='category' />
                <input type='text' placeholder='Insert description' ref={description} name='description'/>
                <input className='submit' type='submit' value='Send' />
            </form>
            </div>
    )
}

