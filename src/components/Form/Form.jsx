import React, { useRef } from 'react'
import { Toaster,toast } from 'react-hot-toast';
import './Form.css'
import axios from 'axios'
import GoogleLogo from '../../assets/img/Google.png'
import Profile from '../../assets/img/profile.png'
import Email from '../../assets/img/@.png'
import Lock from '../../assets/img/lock1.png'
import FormFields from '../FormFields/FormFields'
import Camera from '../../assets/img/Camera.png'
import apiUrl from '../../configHost';


export default function Form() {
    let formReg = useRef()
    


    async function handleSubmit(event) {
        event.preventDefault()

        let dataInputs = []
        

        Object.values(formReg.current).forEach(inputForm => {
            if(inputForm.name){
                dataInputs.push(inputForm)
            }
        })
        dataInputs.pop()

        let data = {
            [dataInputs[0].name]:dataInputs[0].value,
            [dataInputs[1].name]:dataInputs[1].value,
            [dataInputs[3].name]:dataInputs[3].value,
            [dataInputs[2].name]:dataInputs[2].value,
        }

        let url = apiUrl + 'auth/signup'
        try {
            await axios.post(
                url,    /* URL del endpoint para crear una categoria */
                data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
            )
            formReg.current.reset()
            toast.success("User Successfully Created")
            toast.success("We have sent you a verification email",{duration:5000})
        } catch (error) {
            if(typeof error.response.data.message === 'string'){
                toast.error(error.response.data.message)
            }else{
                error.response.data.message.forEach(err => toast.error(err))
            }
        }
        event.target.reset()

    }

    return (
        <form className='form-cont' onSubmit={handleSubmit} ref={formReg}>
            <div className='form-container'>
                <FormFields legend = 'Name' type = 'text' id = 'name' name = 'name'  src = {Profile}/>
                <FormFields legend = 'Email' type = 'email' id = 'mail' name = 'mail'  src = {Email}/>
                <FormFields legend = 'Photo' type = 'text' id = 'photo' name = 'photo'  src = {Camera}/>
                <FormFields legend = 'Password' type = 'password' id = 'password' name = 'password'  src = {Lock}/>
            </div>

            <div className='email-notification'>
                <input className='input-email' type="checkbox" id="email_notification" name='email_notification' />
                <label htmlFor="email_notification">Send notification to my email</label>
            </div>

            <input type="submit" className='btn-submit' value="Sign up" />
            <button className='google-btn'><img src={GoogleLogo} alt='Google logo' /><p>Sign in with Google</p></button>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />

        </form>
    )
}