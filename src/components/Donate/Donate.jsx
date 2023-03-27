import React from 'react'
import axios from 'axios'
import './Donate.css'
import { toast } from 'react-hot-toast';
import character from '../../assets/img/character.png'
import ScrollToTop from '../ScrollToTop/ScrollToTop';



export default function Donate() {

    async function handleClick(event) {
        let donationAmount = (event.target.textContent).slice(1)

        let data = {
            title: 'Donation',
            price: parseInt(donationAmount)
        }

        let url = 'http://localhost:8080/api/donation'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        try {
            let response = await axios.post(url, data, headers)
            console.log(response.data)
            window.location.href = response.data
        } catch (error) {
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach(err => toast.error(err))
            } else {
                toast.error(error.response.data)
            }
        }

    }

    return (
        <div className='donate-main'>
            <ScrollToTop/>
            <h1>Donate</h1>
            <p>Thank you for using our app! If you enjoy it and would like to support us, please consider making a donation. Your contribution will help us continue to provide you with the best possible experience. Thank you for your support!</p>
            <div className='btns-donate' >
                <button onClick={handleClick}>$1000</button>
                <button onClick={handleClick}>$5000</button>
                <button onClick={handleClick}>$10000</button>
            </div>
            <img src={character} />
        </div>
    )
}
