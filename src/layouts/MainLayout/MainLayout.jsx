import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Alert from '../../components/Alert/Alert'
import { Outlet } from 'react-router-dom'

export default function LayoutMain(props) {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
      <Alert />
    </div>
  )
}
