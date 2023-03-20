import React, { useEffect, useState } from 'react'
import './authorUpdate.css'
import FormAuthorUpdate from '../FormAuthorUpdate/FormAuthorUpdate'
import perfil from '../../assets/img/perfil-author.png'
import DataAuthor from '../DataAuthor/DataAuthor'
import { useSelector } from 'react-redux'

export default function AuthorUpdate() {

  let author = useSelector(store => store.author.author)
  
  const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // solo actualizamos el valor si los datos no son undefined
        if (author?.photo) {
          setInputValue(author?.photo);
        }
      }, [author]);

  return (
    <div className='cont-author'>
      <div className='cont-form-author'>
        <h2 className='title-author'>New Author</h2>
        <div className='cont-formAuthor'>
          <img src={inputValue} alt="perfil" className='img-author' />
          <FormAuthorUpdate/>
        </div>
      </div>
      <DataAuthor/>
    </div>
  )
}
