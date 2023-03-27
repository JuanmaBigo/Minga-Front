import React from 'react'
import '../../components/Donate/DonateSuccess.css'
import { Link } from "react-router-dom";
import character from '../../assets/img/character-2.png'


export default function DonateSuccess() {
    return (
        <div className='donate-success'>
            <h1 className='thanks-h2'>Thank you for your donation!</h1>
            <p className='thanks-p'>We are gonna keep working to improve this app as much as we can</p>
            <Link to={'http://localhost:3000/'} className='btn-success'>Go back to home page</Link>
            <img src={character}/>
        </div>
    )
}
