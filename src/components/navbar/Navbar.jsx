import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='main_menu'>
          <div className="container">
            <div className="menu_row">
                <div className="menu_logo"><img src={logo} alt="logo" /></div>
                <div className="menu">
                  <ul>
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link to={'/'} >Services</Link></li>
                    <li><Link to={'/'} >Schedule</Link></li>
                    <li><Link to={'/'} >Contact us</Link></li>
                  </ul>
                </div>
                <div className="menu_button">
                  <Link to={'/'}>Check Status</Link>
                </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar