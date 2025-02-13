import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";


function Footer() {
  return (
    <>
    <div className='footer'>
      <div className="container"> 
        <div className="footer_card">
            <div className="footer_text">
                <h1>Get a quote</h1>
                <p>Please do enter your email address below</p>
                <div className="footer_input">
                    <input type="text" placeholder='lenux.ng@gmail.com' />
                    <button><FaTelegramPlane /></button>
                </div>
            </div>
        </div>  
      <div className="menu_row">
      <div className="menu_logo"><img src={logo} alt="logo" /></div>      
      <div className="menu">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/'}>Services</Link></li>
          <li><Link to={'/'}>Schedule</Link></li>
          <li><Link to={'/'}>Contact us</Link></li>
        </ul>
      </div>
      <div className='social_button'>
        <Link to={'/'}> <CiYoutube /> </Link>
        <Link to={'/'}> <FaInstagram />        </Link>
        <Link to={'/'}> <FiTwitter /> </Link>
        <Link to={'/'}> <SlSocialFacebook />
        </Link>
      </div>
      </div>   
      </div>
    </div>
  </>
  )
}

export default Footer