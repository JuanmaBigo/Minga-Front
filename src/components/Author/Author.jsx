import React from 'react'
import './author.css'
import FormAuthor from '../FormAuthor/FormAuthor'
import perfil from '../../assets/img/perfil-author.png'

export default function Author() {
  return (
    <div className='cont-author'>
      <h2 className='title-author'>New Author</h2>
      <div className='cont-formAuthor'>
        <img src={perfil} alt="perfil" className='img-author' />
        <FormAuthor/>
      </div>
    </div>
  )
}
