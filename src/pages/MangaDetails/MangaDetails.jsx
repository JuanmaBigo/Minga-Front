import React from 'react'
import DetailsManga from '../../components/DetailsManga/DetailsManga'
import { Link as Anchor } from 'react-router-dom'

export default function MangaDetails() {
    let token = localStorage.getItem('token')
    return (
        <>
            {token?<DetailsManga />:<div className='cont-redirect'><Anchor className='a-redirect' to='/'>You must register as an Author</Anchor></div>}
        </> 
    )
}
