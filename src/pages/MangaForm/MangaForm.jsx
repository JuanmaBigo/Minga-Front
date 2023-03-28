import React, {useEffect}from 'react'
import FormManga from '../../components/FormManga/FormManga'
import { Link as Anchor } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import authorAction from '../../store/AuthorProfile/actions'
const {read_author} = authorAction

export default function MangaForm() {
  const dispatch = useDispatch()
  let token = localStorage.getItem('token')
  let author = useSelector(store => store.author.author)
    useEffect(
        ()=>{
            if(author){
                dispatch(read_author())
            }
        },[]
    )
  return (
    <>
      {token && Object.keys(author).length?<FormManga />  :<div className='cont-redirect'><Anchor className='a-redirect' to='/'>You must register as an Author</Anchor></div>}
    </>
  )
}
