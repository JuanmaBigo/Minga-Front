import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './dataAuthor.css'

export default function DataAuthor() {

  let author = useSelector(store => store.author.author)
  const authorDate = author?.date?.split('T')[0]
  const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        // solo actualizamos el valor si los datos no son undefined
        if (author?.photo) {
          setInputValue(author?.photo);
        }
      }, [author]);

  return (
    <div className='data-author'>
        <h2 className='title-author'>Profile</h2>
        <div className='cont-profileAuthor'>
            <h2 className='info-profile'><b>Name:</b> {author?.name}</h2>
            <h2 className='info-profile'><b>Last Name:</b> {author?.last_name}</h2>
            <h2 className='info-profile'><b>City:</b> {author?.city}</h2>
            <h2 className='info-profile'><b>Country:</b> {author?.country}</h2>
            <h2 className='info-profile'><b>Date:</b> {authorDate}</h2>
            <h2 className='info-profile'><b>Photo:</b> </h2>
            <img src={inputValue} alt="perfil" className='img-author-data' />
        </div>
    </div>
  )
}
