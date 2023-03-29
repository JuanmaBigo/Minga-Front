import React from 'react'
import './rolenewleft.css'
import logo from '../../assets/img/Logo Dos.png'
import JoinAuthor from '../JoinAuthor/JoinAuthor'
import JoinCompany from '../JoinCompany/JoinCompany'

export default function RoleNewLeft() {
    return (
    <div className='RoleNewLeft'>
            <p>Change role to</p>
            <img src={logo} />
            <JoinAuthor />
            <JoinCompany />
    </div>
    )
}
