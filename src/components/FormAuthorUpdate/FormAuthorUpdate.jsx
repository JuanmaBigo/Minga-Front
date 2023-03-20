import React from 'react'
import './formAuthorUpdate.css'
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

        await dispatch(update_author({data:data}))
        setReload(!reload)
        setShowAlert(false) // Ocultar la alerta
        
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
        await dispatch(update_author({data:data}))
        setReload(!reload)
        setShowAlertDelete(false) // Ocultar la alerta
        setTimeout(() => {
          navigate('/');
        }, 500);
        
    };

    const handleNo = (event) => {
      event.preventDefault()
      // Esta función se pasa al componente AlertDelete y se ejecuta cuando se hace clic en No
      setShowAlertDelete(false) // Ocultar la alerta
    }

    let authores = useSelector(store=>store.author.author)
    const authoresDate = authores?.date?.split('T')[0]

    useEffect(
        ()=>{
            if(authores){
                dispatch(read_author())
            }
        },[reload]
    )
    
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        
        if (authores?.city && authores?.country) {
          setInputValue(`${authores?.city}, ${authores?.country}`);
        }
      }, [authores]);

  return (
    <>
        
        <form className='form-author' ref={formRef}>
            <input  className='input-author' type="text" name='name' defaultValue={authores?.name} required/>
            <input  className='input-author' type="text" name='last_name' defaultValue={authores?.last_name}/>
            <input  className='input-author' type="text" name='city_country' defaultValue={inputValue} required/>
            <input  className='input-author' type="Date" name='date' defaultValue={authoresDate} />
            <input  className='input-author' type="text" name='photo' defaultValue={authores?.photo} required/>  
            <ButtonAuthor value='Save' class='green' onClick={handleSave}/>
            {showAlert && <AlertSave onAccept={handleAccept} text='Your changes are saved correctly!'/>} 
            <ButtonAuthor value='Delete Account' class='red' onClick={handleDelete}/>
            {showAlertDelete && <AlertDelete onYes={handleYes} onNo={handleNo} text='Are your sure you want to delete?'/>}
        </form>
    </>
  )
}
