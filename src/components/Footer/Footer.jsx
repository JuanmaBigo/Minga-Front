import React from 'react'
import './Footer.css'
import ImgFooter from '../../assets/img/Rectangle14.png'
import Logo from '../../assets/img/Logo Dos.png'
import Heart from '../../assets/img/heart.png'
import Facebook from '../../assets/img/Facebook.png'
import Twitter from '../../assets/img/Twitter.png'
import Vimeo from '../../assets/img/Vimeo.png'
import Youtube from '../../assets/img/Youtube.png'
import { Link as Anchor } from 'react-router-dom'


export default function Footer() {

    function handleClick(event){
        event.preventDefault()
    }
    return (
        

        <div className='footer-container'>
            <img src={ImgFooter} alt='' className='footer-img' />
            <div className='footer-interaction'>
            <div className='subscribe'>
                <h3>Subscribe</h3>
                <form className='subscribe-input'>
                    <input type='email' placeholder='Enter your email' />
                    <button type='submit' onClick={handleClick}>Subscribe Now</button>
                </form>
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
                        <a href='https://www.facebook.com/'><img src={Facebook} alt='facebook logo'/></a>
                        <a href='https://www.twitter.com/'><img src={Twitter} alt='twitter logo'/></a>
                        <a href='https://www.vimeo.com/'><img src={Vimeo} alt='vimeo logo'/></a>
                        <a href='https://www.youtube.com/'><img src={Youtube} alt='youtube logo'/></a>
                    </div>
                    <Anchor className='donate' to='/donate'><p>Donate</p><img src={Heart} alt=''></img></Anchor>
                </div>
            </div>

            <hr></hr>
            </div>
        </div>
    )
}
