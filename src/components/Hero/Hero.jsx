import React from 'react'
import './Hero.css'
import ButtonMain from '../ButtonMain/ButtonMain'
import ImgContainer1 from '../../assets/img/283918815cce51edfc3bd01e534298c8-removebg-preview1.png'
import ImgContainer2 from '../../assets/img/image_2.png'

export default function Hero() {
    return (
        <div className='hero-container'>
            <section className='section-1'>
                <div className='text-container'>
                    <h1>For the love of manga</h1>
                    <h3>Explore our varieties</h3>
                    <p>#MingaLove❤</p>
                    <ButtonMain class='btn-1' text='Let’s go!' />
                </div>
            </section>
            <section className='section-2'>
                <div className='container-2'>
                    <img className='img-container-1' src={ImgContainer1} alt='manga' />
                    <img className='img-container-2' src={ImgContainer2} alt='manga' />
                    <div className='text-container-2'>
                        <h3>One Piece</h3>
                        <h4>Manga</h4>
                        <p>Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates. He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest treasure in history: the legendary One Piece.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}
