import React, {useState} from 'react'
import './Register.css'
import ImgLogo from '../../assets/img/Logo.png'
import Form from '../Form/Form'
import FormLogin from '../FormLogin/FormLogin'

export default function Register() {

    const [esTexto2, setEsTexto2] = useState(false);
    const textoLogin = esTexto2 ? "Log in" : "Sign up";
    const textoWel = esTexto2 ? "" : "back"
    const TipeForm = esTexto2 ? <Form/> : <FormLogin/>

    function handleClick(event){

        event.preventDefault()

        setEsTexto2(!esTexto2);
    }

    return (
        <div className={`register-container ${esTexto2 && "reverse"}`}>
            <div className='form'>
                <div className='text-container-3'>
                    <div className='logo'>
                        <img src={ImgLogo} alt='logo' />
                    </div>
                    <h5 className='title-form'>Welcome<h5>{textoWel}</h5>!</h5>
                    <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                </div>
                <div>
                    {TipeForm}
                </div>
                <p className='link first-link'>Already have an account? <a href='#' className='link-2' onClick={handleClick}>{textoLogin}</a></p>
                <p className='link'>Go back to <a href='#' className='link-2'>Home Page</a></p>
            </div>
            <div className={`img-container ${esTexto2 && "reverse"}`}>
            </div>
        </div>
    )
}
