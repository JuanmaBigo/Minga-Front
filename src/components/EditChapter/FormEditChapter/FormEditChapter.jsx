import React, { useRef, useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FormEditChapter.css';
import { useDispatch, useSelector } from 'react-redux';
import mangasActions from '../../../store/Mangas/actions';
import AlertDelete from '../../AlertDelete/AlertDelete';
import alertActions from '../../../store/Alert/actions';
const { open } = alertActions
const { get_chapter, read_chapters } = mangasActions;



export default function FormEditChapter() {
    const { manga_id } = useParams()
    const [chapter_id, setChapter_id] = useState();
    const [showAlertDelete, setShowAlertDelete] = useState(false)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(read_chapters({ id: manga_id, limit: 0 }))
    }, []);
    let chapters = useSelector(store => store.mangas.chapters)

    let chapterSelected = useRef()
    function handleChangeChapter(event) {
        chapterSelected = event.target.value
        setChapter_id(chapterSelected)
        dispatch(get_chapter({ id: chapterSelected }))
    }


    let select = useRef()

    let dataToEdit = useRef()
    let formChapter = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
        let dataInput = dataToEdit.current.value
        let dataSelected = select.current.value
        let data = {}
        if (dataSelected === "order") {
            data = {
                [dataSelected]: parseInt(dataInput)
            }
        } else if (dataSelected === "pages") {
            data = {
                [dataSelected]: dataInput.split(",")
            }
        } else if ([dataSelected][0] === 'title' | [dataSelected][0] === 'order' | [dataSelected][0] === 'pages' | [dataSelected][0] === 'cover_photo') {
            data = {
                [dataSelected]: dataInput
            }
        } else {
            data = ''
        }


        let url = 'http://localhost:8080/api/chapters/' + chapter_id;
        let token = localStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };

        try {
            if (data === '') {
                throw new Error("Tou must select a data field to edit")
            } else {
                await axios.put(
                    url,
                    data,
                    headers
                )

                dispatch(get_chapter({ id: chapterSelected.current.value }))
                let dataAlert = {
                    icon: "success",
                    text: "Your changes has been saved"
                }
                dispatch(open(dataAlert))
                dispatch(read_chapters({ id: manga_id, limit: 0 }))
            }
        } catch (error) {
            if (typeof error === 'object') {
                toast.error(error.message)
            } else if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }
    }



    async function handleDelete(event) {
        event.preventDefault()
        setShowAlertDelete(true)
    }


    async function handleYes(event) {
        event.preventDefault();

        let url = 'http://localhost:8080/api/chapters/' + chapter_id;
        let token = localStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } };

        try {
            await axios.delete(
                url,
                headers
            )
            toast.success("Chapter Successfully Deleted")
            formChapter.current.reset()
            dispatch(get_chapter({}))
        } catch (error) {
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }
        setShowAlertDelete(false)
    }


    const handleNo = (event) => {
        event.preventDefault()
        setShowAlertDelete(false)
    }

    return (
        <form className='form-edit-chapter' onSubmit={handleSubmit} ref={formChapter}>
            <h2 className='edit-chapter-title'>Edit Chapter</h2>
            <div className='edit-chapter-inputs'>
                <div className='input-edit-chapter'>
                    <select className='select-chapter' defaultValue='select' onChange={handleChangeChapter}>
                        <option value='select' disabled hidden>Select chapter</option>
                        {chapters.map((chapter) => (
                            <option id={chapter._id} key={chapter.title} value={chapter._id} ref={chapterSelected}> {chapter.order} </option>
                        ))}
                    </select>
                    <p className='line'></p>
                </div>
                <div className='input-edit-chapter'>
                    <select className='select-chapter' defaultValue='select' ref={select}>
                        <option value='select' disabled hidden>Select data</option>
                        <option id='title' value='title'>Title</option>
                        <option id='order' value='order'>Order</option>
                        <option id='pages' value='pages'>Pages</option>
                        <option id='cover_photo' value='cover_photo'>Cover photo</option>
                    </select>
                    <p className='line'></p>
                </div>
                <div className='input-edit-chapter'>
                    <input className='input-text-edit' type='text' id='dataToEdit' name='dataToEdit' placeholder='Data to edit' ref={dataToEdit} />
                    <p className='line'></p>
                </div>
            </div>
            <div className='edit-chapter-btns'>
                <input type='submit' className='form-edit-chapter-btn' value='Edit' />
                <input type='button' className='delete-btn' value='Delete' onClick={handleDelete} />
                {showAlertDelete && <AlertDelete onYes={handleYes} onNo={handleNo} text='Are you sure you want to delete?' />}
            </div>
            <Toaster position="top-right" reverseOrder={false} />

        </form>
    )
}