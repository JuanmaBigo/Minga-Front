import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function LayoutMain(props) {
  return (
    <div className="main-container">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
