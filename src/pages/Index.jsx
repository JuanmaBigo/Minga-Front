import React from 'react'
import Hero from '../components/Hero/Hero'
import Register from '../components/Register/Register'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Index() {
    return (
        <div>
            <Header/>
            <Hero />
            <Register />
            <Footer />
        </div>
    )
}
