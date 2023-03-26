import React from 'react'
import './formAuthorUpdate.css'
import { Toaster, toast } from 'react-hot-toast';
import { useRef,useEffect,useState } from 'react'
import ButtonAuthor from '../ButtonAuthor/ButtonAuthor'
import AlertSave from '../AlertSave/AlertSave'
import AlertDelete from '../AlertDelete/AlertDelete'
import { useSelector,useDispatch} from 'react-redux'
import authorAction from '../../store/AuthorProfile/actions'
import { useNavigate } from 'react-router-dom'
const {read_author,update_author} = authorAction


export default function FormAuthorUpdate() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formRef = useRef(); 
    const [reload,setReload] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showAlertDelete, setShowAlertDelete] = useState(false)

    const handleSave = (event) => {
      event.preventDefault()
      setShowAlert(true) // Mostrar la alerta cuando se hace clic en Save
    }

    const handleAccept = async(event) => {
        
        event.preventDefault(); 
        const cityCountry = formRef.current.city_country.value
        const array = cityCountry.split(',')

        const data = {
          name: formRef.current.name.value,
          last_name: formRef.current.last_name.value,
          city:array[0],
          country:array[1].trim(),
          date: formRef.current.date.value,
          photo:formRef.current.photo.value
        };

        for (let clave in data) {
          // verifica que la propiedad sea propia del objeto y no heredada
          if (data.hasOwnProperty (clave)) {
            // verifica que la propiedad tenga un valor falso (null, "", false, 0, NaN, etc.)
            if (!data [clave]) {
              delete data [clave]; // elimina la propiedad
            }
          }
        }

        try{
          await dispatch(update_author({data:data}))
          setReload(!reload)
          setShowAlert(false) // Ocultar la alerta
          toast.success("Author Successfully Updated")

        }catch(error){
            console.log(error)
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }
    
    };

    const handleDelete = (event) => {
      event.preventDefault()
      setShowAlertDelete(true) // Mostrar la alerta cuando se hace clic en Delete Account
    }

    const handleYes = async (event) => {
        event.preventDefault(); 
        const data = {
          active:false 
        };

        try{
          await dispatch(update_author({data:data}))
          setReload(!reload)
          setShowAlertDelete(false) // Ocultar la alerta
          toast.success("Author Successfully Removed")
          setTimeout(() => {
            navigate('/');
          }, 500);

        }catch(error){
            console.log(error)
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }
    };

    const handleNo = (event) => {
      event.preventDefault()
      // Esta función se pasa al componente AlertDelete y se ejecuta cuando se hace clic en No
      setShowAlertDelete(false) // Ocultar la alerta
    }

    let author = useSelector(store=>store.author.author)
    const authoresDate = author?.date?.split('T')[0]

    useEffect(
        ()=>{
            if(author){
                dispatch(read_author())
            }
        },[reload]
    )
    
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        
        if (author?.city && author?.country) {
          setInputValue(`${author?.city}, ${author?.country}`);
        }
      }, [author]);

  return (
    <>
        
        <form className='form-author' ref={formRef}>
            <input  className='input-author' type="text" name='name' defaultValue={author?.name}  placeholder='Name' />
            <input  className='input-author' type="text" name='last_name' defaultValue={author?.last_name} placeholder='Last Name'/>
            <input  className='input-author' type="text" name='city_country' defaultValue={inputValue}  placeholder='City,Country'/>
            <input  className='input-author' type="Date" name='date' defaultValue={authoresDate} />
            <input  className='input-author' type="text" name='photo' defaultValue={author?.photo}  placeholder='Photo'/>  
            <ButtonAuthor value='Save' class='green' onClick={handleSave}/>
            {showAlert && <AlertSave onAccept={handleAccept} text='Your changes are saved correctly!'/>} 
            <ButtonAuthor value='Delete Account' class='red' onClick={handleDelete}/>
            {showAlertDelete && <AlertDelete onYes={handleYes} onNo={handleNo} text='Are your sure you want to delete?'/>}
        </form>
        <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}
