import React from 'react'
import './Protects.css'
import { MdOutlineShield } from 'react-icons/md'
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { Link } from 'react-router-dom'

function Protects() {
  return (
    <div className="protects">
        <div className="container">
            <div className="protects_row">
                <div className="protects_col">
                    <div className="protects_head">
                        <h2>Why get vaccinated today?</h2>
                        <p>Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem pellentesque 
                            vestibulum risus matti. In molestie condimentum malesuada non.
                        </p>
                    </div>
                    <div className="protects_card">
                        <div className="big_card">
                            <div className="card_icons">
                            <MdOutlineShield className='icons' />
                            </div>
                            <div className="protects_text">
                                <h2>Protects your immune system against viruses</h2>
                                <p>Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium,
                                    dictum. Dolor eget vel nulla lorem ac.
                                </p>
                            </div>
                            <div className="more_button">
                                <Link to='#'>Read More</Link>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div className="card">
                            <div className="pro_icon">
                            <GoPeople className='icon'/>
                            </div>
                            <div className="card_text">
                                <h2>Minimize the spread of the Virus</h2>                                
                            </div>
                            <div className="more_button">
                                <Link to='#'>Read More</Link>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        <div className="card">
                            <div className="pro_icon">
                            <GoPeople className='icon'/>
                            </div>
                            <div className="card_text">
                                <h2>Protect yourself</h2>                                
                            </div>
                            <div className="more_button">
                                <Link to='#'>Read More</Link>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Protects