import React from 'react'
import './Footer.css'
import ImgFooter from '../../assets/img/Rectangle14.png'
import Logo from '../../assets/img/Logo-2.png'
import Heart from '../../assets/img/heart.png'


export default function Footer() {
    return (

        <div className='footer-container'>
            <img src={ImgFooter} alt="" className='footer-img' />
            <div className='subscribe'>
                <h3>Subscribe</h3>
                <div className='subscribe-input'>
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe Now</button>
                </div>
                <div className='links'>
                    <a href='#'>Home</a>
                    <a href='#'>Mangas</a>
                </div>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <div className='social-media'>
                        <a href='#'><i class="fab fa-facebook-f"></i></a>
                        <a href='#'><i class="fab fa-twitter"></i></a>
                        <a href='#'><i class="fab fa-instagram"></i></a>
                        <a href='#'><i class="fab fa-instagram"></i></a>
                    </div>
                    <button className='donate'><p>Donate</p><img src={Heart}></img></button>
                </div>
                <hr></hr>

            </div>
        </div>
    )
}
