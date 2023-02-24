import { useRef } from 'react'
import './Form.css'
import axios from 'axios'
import GoogleLogo from '../../assets/img/Google.png'
import Profile from '../../assets/img/profile.png'
import Email from '../../assets/img/@.png'
import Lock from '../../assets/img/lock1.png'

export default function Form() {
    let name = useRef()
    let email = useRef()
    let password = useRef()
    let emailNotification = useRef()
    let passwordConfirm = useRef()


    async function handleSubmit(event) {
        event.preventDefault()
        if (password.current.value === passwordConfirm.current.value) {
            let data = {
                [name.current.name]: name.current.value,
                [email.current.name]: email.current.value,
                [password.current.name]: password.current.value,
                [emailNotification.current.name]: emailNotification.current.checked,
            }
            let url = 'http://localhost:8080/users'
            try {
                await axios.post(
                    url,    /* URL del endpoint para crear una categoria */
                    data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
                )
            } catch (error) {
                console.log(error)
                console.log('ocurrio un error')
            }
            event.target.reset()
        } else {
            alert('passwords do not match')
            return
        }

    }

    return (
        <form className='form-cont' onSubmit={handleSubmit}>
            <div className='form-container'>
                <fieldset>
                    <legend>Name</legend>
                    <input ref={name} type="text" id="name" name='name' required />
                    <img src={Profile} alt='profile' />
                </fieldset>

                <fieldset>
                    <legend>Email</legend>
                    <input ref={email} type="email" id="email" name='mail' required />
                    <img src={Email} alt='@' />
                </fieldset>

                <fieldset>
                    <legend>Password</legend>
                    <input ref={password} type="password" id='password' name='password' required />
                    <img src={Lock} alt='lock' />
                </fieldset>

                <fieldset>
                    <legend>Confirm Password</legend>
                    <input ref={passwordConfirm} type="password" id='passwordConfirm' name='passwordConfirm' required />
                    <img src={Lock} alt='lock' />
                </fieldset>

            </div>

            <div className='email-notification'>
                <input ref={emailNotification} className='input-email' type="checkbox" id="email_notification" name='email_notification' />
                <label htmlFor="email_notification">Send notification to my email</label>
            </div>

            <input type="submit" className='btn-submit' value="Sign up" />
            <button className='google-btn'><img src={GoogleLogo} alt='Google logo' /><p>Sign in with Google</p></button>

        </form>
    )
}