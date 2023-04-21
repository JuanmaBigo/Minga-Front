import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Header.css'
import Logo from '../../assets/img/Logo-2.png'
import BtnLogo from '../../assets/img/Menu.png'
import UserImage from '../../assets/img/userimage.png'
import BtnClose from '../../assets/img/Union.png'
import LogoMin from '../../assets/img/logo-min.png'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useSelector,useDispatch } from 'react-redux'
import authorAction from '../../store/AuthorProfile/actions'
import apiUrl from '../../configHost'
const {read_author} = authorAction

export default function Header() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    
    const [isOpen, setIsOpen] = useState(true)
    let url = apiUrl + 'auth/token'
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    async function handleSignOut() {
        try {
            await axios.post(url, null, headers).then(res =>
                localStorage.setItem('token', ''));
            localStorage.setItem('user', JSON.stringify({
                name: '',
                mail: '',
                photo: ''
            }))
            setIsOpen(!isOpen)
            toast.success('The session was closed successfully!')
            setTimeout(()=>{
                navigate('/')
            },500)
        } catch (error) {
            toast.error("You're already signed out or not signed in")
        }
    }



    if (!token) {
        localStorage.setItem('user', JSON.stringify({
            name: '',
            mail: '',
            photo: ''
        }))
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let name = user.name
    let mail = user.mail
    let photo = user.photo

    let author = useSelector(store => store.author.author)
    useEffect(
        ()=>{
            if(author){
                dispatch(read_author())
            }
        },[isOpen]
    )
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
                            <p className='email'>{mail ? mail : 'User Mail'}</p>
                        </div>
                    </div>

                    <div className='nav-close-btn'>
                        <button onClick={() => setIsOpen(!isOpen)}><img src={BtnClose} alt="logo" className="logo" /></button>
                    </div>
                </div>
        
                <Anchor className='nav-btn' to='/'>Home</Anchor>
                {token ? <Anchor className='nav-btn' to='/mangas/:page'>Manga</Anchor> :''}
                {token && author?.active? <Anchor className='nav-btn' to='/profile'>Profile</Anchor> : ''}
                {token && Object.keys(author).length? <Anchor className='nav-btn' to='/mymangas'>My Mangas</Anchor> :''}
                {token && Object.keys(author).length? <Anchor className='nav-btn' to='/manga-form'>Manga-Form</Anchor> : ''}
                {token && Object.keys(author).length? <Anchor className='nav-btn' to='/chapter-form/:manga_id'>Chapter-Form</Anchor> : ''}
                {token ? '' : <Anchor className='nav-btn' to='/register'>Register</Anchor>}
                {token ? '' : <Anchor className='nav-btn' to='/signin' text={'false'}>Login</Anchor>}
                {token ? <Anchor className='nav-btn' to='/new-role'>New Role</Anchor> : ''}
                {token ? <Anchor className='nav-btn' onClick={handleSignOut}>Logout</Anchor> : ''}
            </div>

            <img src={Logo} alt="logo" className="logo-1" />
            <img src={LogoMin} alt="logo" className="logo-min" />
        </div>
    )
}

