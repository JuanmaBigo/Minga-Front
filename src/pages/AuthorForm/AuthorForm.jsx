import React from 'react'
import Author from '../../components/Author/Author'
import { Link as Anchor } from 'react-router-dom'

export default function AuthorForm() {
  let token = localStorage.getItem('token')
  return (
    <>
      {token?<Author/>:<div className='cont-redirect'><Anchor className='a-redirect' to='/'>You must register as an Author</Anchor></div>}
    </>
  )
}
