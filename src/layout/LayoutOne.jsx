import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ResponsiveNavbar from '../responsiveNavbar/ResponsiveNavbar'

function LayoutOne() {
  return (
    <>
        <Navbar/>
        <ResponsiveNavbar/>
        <Outlet/>
    </>
  )
}

export default LayoutOne