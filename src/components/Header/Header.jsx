import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/img/Logo-2.png'
import BtnLogo from '../../assets/img/Menu.png'
import UserImage from '../../assets/img/userimage.png'
import BtnClose from '../../assets/img/Union.png'
import LogoMin from '../../assets/img/logo-min.png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='header-container'>
            <div className="nav-toggler">
                <img src={BtnLogo} alt="logo" className='logo' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className={`nav ${isOpen && "open"}`}>
                <div className="nav-top">
                    <div className='nav-user'>
                        <img src={UserImage} alt="userimage" />
                        <div className='user-info'>
                            <p className='username'>Lucas Ezequiel Silva</p>
                            <p className='email'>lucasezequielsilva@gmail.com</p>
                        </div>
                    </div>

                    <div className='nav-close-btn'>
                        <button onClick={() => setIsOpen(!isOpen)}><img src={BtnClose} alt="logo" className="logo" /></button>
                    </div>
                </div>
           
                <a className='nav-btn' href='#'>Home</a>
                <a className='nav-btn' href='#'>Mangas</a>
                <a className='nav-btn' href='#'>My Mangas</a>
                <a className='nav-btn' href='#'>Favourites</a>
                <a className='nav-btn' href='#'>Logout</a>
            </div>

            <img src={Logo} alt="logo" className="logo-1" />
            <img src={LogoMin} alt="logo" className="logo-min" />
        </div>
    )
}

