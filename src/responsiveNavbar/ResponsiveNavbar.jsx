import React, { useState } from 'react'
import './ResponsiveNavbar.css'
import logo from '../assets/images/logo.png'
import { CiTextAlignRight } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResponsiveNavbar() {
  
  const [showMenu, setShowMenu] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
    setAnimateOut(false);
  };

  const handleCloseMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 700);
  };

  return (
    <>
        <nav>
          <div className="ResMenu">
            <div className="container">
              <div className="resRow">            
                <div className="resLogo">
                  <img src={logo} alt="resLogo" />
                </div>              
                <div className="SideMenu">
                  {!showMenu && (
                    <CiTextAlignRight onClick={handleOpenMenu} className="resMenuIcon"/>
                  )}
                </div>              
                {showMenu && (
                  <div className={`mobile_menu ${animateOut ? 'sideOut' : 'sideIn'}`}>
                    <IoMdClose onClick={handleCloseMenu} className="cancel"/>
                    <ul className="resMenuItems">
                      <li><Link to="#">Home</Link></li>
                      <li><Link to="#">Services</Link></li>
                      <li><Link to="#">Schedule</Link></li>
                      <li><Link to="#">Contact us</Link></li>
                    </ul> 
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default ResponsiveNavbar