import React, {useEffect, useState} from 'react'
import './Register.css'
import ImgLogo from '../../assets/img/Logo.png'
import Form from '../Form/Form'
import FormLogin from '../FormLogin/FormLogin'
import {Link as Anchor} from 'react-router-dom'

export default function Register({text}) {

    const [esTexto2, setEsTexto2] = useState(true);
    const textoLogin = esTexto2 ? "Log in" : "Sign up";
    const textoWel = esTexto2 ? "" : "back"
    const TipeForm = esTexto2 ? <Form/> : <FormLogin/>

    function handleClick(event){

        event.preventDefault()

        setEsTexto2(!esTexto2);
    }

    useEffect(()=>{
        setEsTexto2(text)
    },[text])

    return (
        <div className={`register-container ${!esTexto2 && "reverse"}`}>
            <div className='form'>
                <div className='text-container-3'>
                    <div className='logo'>
                        <img src={ImgLogo} alt='logo' />
                    </div>
                    <div className='title-form'>Welcome<h5>{textoWel}</h5>!</div>
                    <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                </div>
                <div>
                    {TipeForm}
                </div>
                <p className='link first-link'>Already have an account? <Anchor  className='link-2' onClick={handleClick}>{textoLogin}</Anchor></p>
                <p className='link'>Go back to <Anchor to='/' className='link-2'>Home Page</Anchor></p>
            </div>
            <div className={`img-container ${!esTexto2 && "reverse"}`}>
            </div>
        </div>
    )
}
