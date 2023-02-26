import React from 'react'
import './Footer.css'
import ImgFooter from '../../assets/img/Rectangle14.png'
import Logo from '../../assets/img/Logo Dos.png'
import Heart from '../../assets/img/heart.png'
import Facebook from '../../assets/img/Facebook.png'
import Twitter from '../../assets/img/Twitter.png'
import Vimeo from '../../assets/img/Vimeo.png'
import Youtube from '../../assets/img/Youtube.png'


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
            </div>
            <div className='footer-links'>
                <div className='links'>
                    <a href='#'>Home</a>
                    <a href='#'>Mangas</a>
                </div>
                <div>
                    <img src={Logo} alt="logo" className='logo2'/>
                </div>
                <div className='social-donate'>
                    <div className='social-media'>
                        <a href='#'><img src={Facebook} /></a>
                        <a href='#'><img src={Twitter} /></a>
                        <a href='#'><img src={Vimeo} /></a>
                        <a href='#'><img src={Youtube} /></a>
                    </div>
                    <button className='donate'><p>Donate</p><img src={Heart}></img></button>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}
