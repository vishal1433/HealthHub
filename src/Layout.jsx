import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Pages/Header/Header'
import Footer from './Components/Pages/Footer/Footer'

function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
    
  )
}

export default Layout