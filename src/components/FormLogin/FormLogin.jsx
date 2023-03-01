import React from 'react'
import { useRef } from 'react'
import { Toaster,toast } from 'react-hot-toast';
import './formLogin.css'
import axios from 'axios'
import GoogleLogo from '../../assets/img/Google.png'
import Email from '../../assets/img/@.png'
import Lock from '../../assets/img/lock1.png'
import FormFields from '../FormFields/FormFields'


export default function FormLogin() {
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
        console.log(dataInputs);

        let data = {
            [dataInputs[0].name]:dataInputs[0].value,
            [dataInputs[1].name]:dataInputs[1].value,
        }

        // if (dataInputs[1].value) {
        //     let url = 'http://localhost:8080/users'
        //     try {
        //         await axios.post(
        //             url,    /* URL del endpoint para crear una categoria */
        //             data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
        //         )
        //         formReg.current.reset()
        //         toast.success("Successful session start")
        //     } catch (error) {
        //         console.log(error)
        //         console.log('ocurrio un error')
        //     }
        //     event.target.reset()
        // } else {
        //     toast.error('Passwords do not match')
            
        // }

    }
  return (
    <form className='form-cont' onSubmit={handleSubmit} ref={formReg}>
            <div className='form-container'>
                <FormFields legend = 'Email' type = 'email' id = 'email' name = 'email'  src = {Email}/>
                <FormFields legend = 'Password' type = 'password' id = 'password' name = 'password'  src = {Lock}/>
            </div>

            <div className='email-notification'>
                <input className='input-email' type="checkbox" id="email_notification" name='email_notification' />
                <label htmlFor="email_notification">Send notification to my email</label>
            </div>

            <input type="submit" className='btn-submit' value="Sign in" />
            <button className='google-btn'><img src={GoogleLogo} alt='Google logo' /><p>Sign in with Google</p></button>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />

        </form>
  )
}
