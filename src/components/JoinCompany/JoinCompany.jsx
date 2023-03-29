import React from 'react'
import './joincompany.css'
import image1 from '../../assets/img/company-1.png'
import image2 from '../../assets/img/company-2.png'
import image3 from '../../assets/img/company-3.png'
import { useNavigate } from 'react-router-dom'

export default function JoinCompany() {

    let navigate = useNavigate()
    
    let handleClick = () => navigate('/company-form')

    return (
    <div className='JoinCompany' onClick={handleClick}>
        <div className='images-company'>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
        </div>
        <div className='text-company'>
            <span>Join as a company!</span>
            <p>I'm a company and I want to publish my comics</p>
        </div>
    </div>
    )
}
