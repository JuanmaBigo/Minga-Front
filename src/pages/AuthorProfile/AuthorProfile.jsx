import React from 'react'
import AuthorUpdate from '../../components/AuthorUpdate/AuthorUpdate'
import { Link as Anchor } from 'react-router-dom'

export default function AuthorProfile() {
  let token = localStorage.getItem('token')
  return (
    <>
      {token?<AuthorUpdate/>:<div className='cont-redirect'><Anchor className='a-redirect' to='/'>You must register as an Author</Anchor></div>}
    </>
  )
}
