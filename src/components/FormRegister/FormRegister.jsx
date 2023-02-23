import { useRef } from 'react'
import './formRegister.css'
import axios from 'axios'

export default function FormRegister() {

    let name = useRef()
    let description = useRef()
    let admin_id = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
        //console.log(name.current)
        //console.log(name.current.value)
        //console.log(name.current.name)
        //console.log(description.current)
        //console.log(description.current.value)
        //console.log(description.current.name)
        //console.log(admin_id.current)
        //console.log(admin_id.current.value)
        //console.log(admin_id.current.name)
        let data = {
            [name.current.name]: name.current.value,
            [description.current.name]: description.current.value,
            [admin_id.current.name]: admin_id.current.value,
        }
        console.log(data)
        let url = 'http://localhost:8080/categories'
        try {
            await axios.post(
                url,    /* URL del endpoint para crear una categoria */
                data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
            )
        } catch(error) {
            console.log(error)
            console.log('ocurrio un error')
        }
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor="name">NAME</label>
            <input ref={name} type="text" id="name" name='name' required />
            <label htmlFor="description">DESCRIPTION</label>
            <input ref={description} type="text" id="description" name='description' required />
            <label htmlFor="admin_id">ADMIN_ID</label>
            <input ref={admin_id} type="text" id='admin_id' name='admin_id' required />
            <input type="submit" value="CREATE" />
        </form>
    )
}