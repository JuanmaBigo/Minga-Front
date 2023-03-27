import React, { useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop'


import './FormChapter.css'

export default function FormChapter() {
    const { manga_id } = useParams()

    let formChapter = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
        let dataInputs = []

        Object.values(formChapter.current).forEach(inputForm => {
            if (inputForm.name) {
                dataInputs.push(inputForm)
            }
        })

        let data

        if (dataInputs[1].value !== "") {
            data = {
                "manga_id": manga_id,
                [dataInputs[0].name]: dataInputs[0].value,
                [dataInputs[1].name]: dataInputs[1].value,
                [dataInputs[2].name]: (dataInputs[2].value).split(",")
            }
        } else {
            data = {
                "manga_id": manga_id,
                [dataInputs[0].name]: dataInputs[0].value,
                [dataInputs[2].name]: (dataInputs[2].value).split(",")
            }
        }

        let url = 'http://localhost:8080/api/chapters'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }


        try {
            await axios.post(
                url,    /* URL del endpoint para crear una categoria */
                data,    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
                headers
            )
            toast.success("Chapter Successfully Created")
            formChapter.current.reset()

        } catch (error) {
            console.log(error)
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }
    }


    return (
        <form className='form-chapter' onSubmit={handleSubmit} ref={formChapter}>
            <ScrollToTop />
            <h2 className='new-chapter-title'>New Chapter</h2>
            <div className='chapter-inputs'>
                <div className='input-chapter'>
                    <input type='text' id='title' name='title' placeholder='Insert title' />
                    <p className='line'></p>
                </div>
                <div className='input-chapter'>
                    <input type='text' id='order' name='order' placeholder='Insert order' />
                    <p className='line'></p>
                </div>
                <div className='input-chapter'>
                    <input type='text' id='pages' name='pages' placeholder='Insert pages' />
                    <p className='line'></p>
                </div>
            </div>
            <input type='submit' className='form-chapter-btn' value='Send' />

            <Toaster position="top-right" reverseOrder={false} />

        </form>
    )
}
