import React from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
        <div className="registration">
            <div className="container">
                <div className="registration_row">
                    <div className="registration_col">
                        <div className="registration_text">
                            <div className="registration_head">
                                <h1>Get your vaccine registration today</h1>
                            </div>
                            <div className="reg_img ">
                                <img src="images/COVID.png" alt="COVID" />
                            </div>
                            <div className="registration_input">
                                <h2>Patient’s Full Name</h2>
                                <input type="text" placeholder='Full name' />
                                <h3>Mobile Number</h3>
                                <p>Notifications for appointment and reminders will be sent to this provided number</p>
                            </div>
                            <div className="country_input">
                                <div className="cou"><img src="images/country.png" alt="country" /></div>
                                <input  type="text" placeholder='Phone number' />
                                <div className="verify_button">
                                    <button>Verify</button>
                                </div>
                            </div>
                            <div className="submit_button">
                                <button>Submit</button>
                            </div>
                            <div className="registration_click">
                                <Link to='#'>Already registered ? <span>Check your status</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="registration_img">
                        <img src="images/COVID.png" alt="COVID" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration