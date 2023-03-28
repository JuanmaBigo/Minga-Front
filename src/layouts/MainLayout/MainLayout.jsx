import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Alert from '../../components/Alert/Alert'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

export default function LayoutMain(props) {
  return (
    <div className="main-container">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
<<<<<<< HEAD
      <Alert />
=======
      <Alert/>
>>>>>>> 58f4002560a68c80a495d830a5e1fee1af66901f
    </div>
  )
}
