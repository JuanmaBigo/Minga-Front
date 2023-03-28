import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

export default function IndexLayout() {

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  )
}
