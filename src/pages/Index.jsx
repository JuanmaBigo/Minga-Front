import React from 'react'
import Hero from '../components/Hero/Hero'
import Register from '../components/Register/Register'
import LayoutMain from '../layouts/LayoutMain/LayoutMain'

export default function Index() {
    return (
        <div>
            <LayoutMain>
                <Hero />
                <Register />
            </LayoutMain>
        </div>
    )
}
