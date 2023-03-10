import React, { useState } from 'react'
import axios from 'axios'
import './Header.css'
import Logo from '../../assets/img/Logo-2.png'
import BtnLogo from '../../assets/img/Menu.png'
import UserImage from '../../assets/img/userimage.png'
import BtnClose from '../../assets/img/Union.png'
import LogoMin from '../../assets/img/logo-min.png'
import Manga from '../Manga/Manga'
import { Link as Anchor } from 'react-router-dom'
import { toast } from 'react-hot-toast'



export default function Header() {
    const [isOpen, setIsOpen] = useState(true)
    let url = `http://localhost:8080/api/auth/token`
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    async function handleSignOut() {
        try {
            await axios.post(url, null, headers).then(res =>
                localStorage.setItem('token', ''));
            localStorage.setItem('user', JSON.stringify({
                name: '',
                email: '',
                photo: ''
            }))
            setIsOpen(!isOpen)
            toast.success('The session was closed successfully!')
        } catch (error) {
            toast.error("You're already signed out or not signed in")
        }
    }



    if (!token) {
        localStorage.setItem('user', JSON.stringify({
            name: '',
            email: '',
            photo: ''
        }))
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let name = user.name
    let email = user.email
    let photo = user.photo


    let url = `http://localhost:8080/api/auth/token`
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    async function handleSignOut() {
        try {
            await axios.post(url, null, headers).then(res =>
                localStorage.setItem('token', ''));
            localStorage.setItem('user', JSON.stringify({
                name: '',
                email: '',
                photo: ''
            }))
            setIsOpen(!isOpen)
            toast.success('The session was closed successfully!')
        } catch (error) {
            toast.error("You're already signed out or not signed in")
        }
    }



    if (!token) {
        localStorage.setItem('user', JSON.stringify({
            name: '',
            email: '',
            photo: ''
        }))
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let name = user.name
    let email = user.email
    let photo = user.photo


    return (
        <div className='header-container'>
            <div className="nav-toggler">
                <img src={BtnLogo} alt="logo" className='logo' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className={`nav ${isOpen && "open"}`}>
                <div className="nav-top">
                    <div className='nav-user'>
                        <img src={photo ? photo : UserImage} alt="userimage" />
                        <div className='user-info'>
                            <p className='username'>{name ? name : 'Username'}</p>
                            <p className='email'>{email ? email : 'User Mail'}</p>
                        </div>
                    </div>

                    <div className='nav-close-btn'>
                        <button onClick={() => setIsOpen(!isOpen)}><img src={BtnClose} alt="logo" className="logo" /></button>
                    </div>
                </div>
        
                <Anchor className='nav-btn' to='/'>Home</Anchor>
                {token ? <Anchor className='nav-btn' to='/manga-form'>Manga-Form</Anchor> : ''}
                <Anchor className='nav-btn' to='/manga/:page'>Manga</Anchor>
                {token ? '' : <Anchor className='nav-btn' to='/auth'>Auth</Anchor>}
                <Anchor className='nav-btn' to='/manga-form'>Mangas</Anchor>
                <Anchor className='nav-btn' to='/chapters/:id/:page'>Chapters</Anchor>
                <Anchor className='nav-btn' to='/auth'>Auth</Anchor>
                {token ? '' : <Anchor className='nav-btn' to='/register'>Register</Anchor>}
                {token ? '' : <Anchor className='nav-btn' to='/signin' text={'false'}>Login</Anchor>}
                {token ? <Anchor className='nav-btn' onClick={handleSignOut}>Logout</Anchor> : ''}
            </div>

            <img src={Logo} alt="logo" className="logo-1" />
            <img src={LogoMin} alt="logo" className="logo-min" />
        </div>
    )
}

