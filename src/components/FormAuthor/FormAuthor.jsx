import React from 'react'
import './formAuthor.css'
import { useRef } from 'react'
import { Toaster,toast } from 'react-hot-toast'
import ButtonAuthor from '../ButtonAuthor/ButtonAuthor'
import axios from 'axios'

export default function FormAuthor() {
    const formRef = useRef()

    async function handleSubmit (event){
        event.preventDefault()
        formRef.current = new FormData(event.target)
        const name = formRef.current.get('name')
        const lastName = formRef.current.get('last_name')
        const cityCountry = formRef.current.get('city-country')
        const date = formRef.current.get('date')
        const photo = formRef.current.get('photo')
        const array = cityCountry.split(',')

        let data
        if(array.length === 2){
            data ={
                name: name,
                last_name: lastName,
                city: array[0],
                country: array[1],
                date: date,
                photo: photo,
            }

            let url = 'http://localhost:8080/api/authors'

            try {
                await axios.post(url,data) 
                toast.success('Authors created susccesfully')//*te permite crear el author pero recuerda implementar el passport en el back y en el front por headers para que se cumpla la condicion de autenticacion
            } catch (error) {
                if(typeof error.response.data.message === 'string'){
                    toast.error(error.response.data.message)
                }else{
                    error.response.data.message.forEach(err => toast.error(err))
                }
            }
            event.target.reset()
            
        }else{
            toast.error("Error in your credentials (don't forget the comma after the city)")
        }

        
    }
  return (
    <>
        <form className='form-author' onSubmit={handleSubmit}>
            <input className='input-author' type="text" name='name' placeholder='Name' required/>
            <input className='input-author' type="text" name='last_name' placeholder='Last Name'/>
            <input className='input-author' type="text" name='city-country' placeholder='City,Country' required/>
            <input className='input-author' type="Date" name='date' />
            <input className='input-author' type="text" name='photo' placeholder='URL Profile Image' required/>  
            <ButtonAuthor/>
        </form>
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
    </>
  )
}
