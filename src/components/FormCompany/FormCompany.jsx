import React, { useRef } from 'react'
import './formcompany.css'
import image from '../../assets/img/perfil-author.png'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'

export default function FormCompany() {

    let name = useRef()
    let website = useRef()
    let logo = useRef()
    let description = useRef()

    let url = 'http://localhost:8080/api/companies'
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}`}}

    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        let data = {
            name: name.current.value,
            website: website.current.value,
            logo: logo.current.value,
            description: description.current.value
        }

        try {
            await axios.post(url, data, headers)
            toast.success('Company successfully created')
            e.target.reset()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    


    return (
    <div className='FormCompany'>
        <p>New Company</p>
        <img src={image} />
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' ref={name} />
            <input type='text'  placeholder='Website' ref={website}/>
            <input type='text' placeholder='URL Profile image' ref={logo} />
            <input type='text' placeholder='Description' ref={description} />
            <input className='sent' type='submit' value='Sent' />
        </form>
        <Toaster />
    </div>
    )
}
