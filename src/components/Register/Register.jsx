import React from 'react'
import './Register.css'
import ImgLogo from '../../assets/img/Logo.png'
import Form from '../Form/Form'

export default function Register() {
    return (
        <div className='register-container'>
            <div className='form'>
                <div className='text-container-3'>
                    <div className='logo'>
                        <img src={ImgLogo} alt='logo' />
                    </div>
                    <h5>Welcome!</h5>
                    <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                </div>
                <Form />
                <p className='link first-link'>Already have an account? <a href='#' className='link-2'>Log in</a></p>
                <p className='link'>Go back to <a href='#' className='link-2'>Home Page</a></p>
            </div>
            <div className='img-container'>
            </div>
        </div>
    )
}
