import React from 'react'
import './formAuthorUpdate.css'
import { useRef,useEffect,useState } from 'react'
import { Toaster,toast } from 'react-hot-toast'
import ButtonAuthor from '../ButtonAuthor/ButtonAuthor'
import axios from 'axios'
import { useSelector,useDispatch} from 'react-redux'
import authorAction from '../../store/AuthorProfile/actions'
const {read_author,update_author} = authorAction

export default function FormAuthorUpdate() {
    
    const dispatch = useDispatch()
    const formRef = useRef(); 
    const [reload,setReload] = useState(false)

    const handleSave = async(event) => {
        
        event.preventDefault(); 
        const cityCountry = formRef.current.city_country.value
        const array = cityCountry.split(',')

        const data = {
          name: formRef.current.name.value,
          last_name: formRef.current.last_name.value,
          city:array[0],
          country:array[1],
          date: formRef.current.date.value,
          photo:formRef.current.photo.value
        };

        await dispatch(update_author({data:data}))
        setReload(!reload)
        
    };

    const handleDelete = (event) => {
        
        event.preventDefault(); 
        const data = {
          active:false 
        };
        dispatch(update_author({data:data}))
        
        setReload(!reload)
        
    };

    let authores = useSelector(store=>store.author.author)
    const authoresDate = authores?.date?.split('T')[0]
    
   
    console.log();
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
            <ButtonAuthor value='Delete Account' class='red' onClick={handleDelete}/>
        </form>
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
    </>
  )
}
