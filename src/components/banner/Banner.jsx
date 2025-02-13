import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { CiClock2 } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import ScheduleButton from '../scheduleButton/ScheduleButton';

function Banner() {
  return (
   <section className='banner'>
        <div className="container">
          <div className="banner_row">
            <div className="banner_col">
              <div className="banner_head">
                <h1>Get Vaccinated. Boost your Immune System</h1>
                <h2>COVID-19 Vaccination Got Easier With, Vaccination.ng</h2>
                <p>Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.</p>
                <div className="banner_button">
                  <Button text='Get Vaccine'/>
                  <Button text='Help Centre'/>
                </div>
              </div>
              <div className="banner_img">
                <img src="images/banner-img.png" alt="banner-img" />
              </div>
            </div>
            <div className="Schedule_card">
              <div className="Schedule_head">
              <CiClock2 className='clo'/>
                <h2>Schedule your Vaccination</h2>
              </div>
              <div className="Schedule_info">
              <ScheduleButton icons={<GrLocation/>} head='Location' text='Ikeja Lagos, Nigeria'/>
              <ScheduleButton icons={<GrLocation/>} head='Location' text='Ikeja Lagos, Nigeria'/>
              <ScheduleButton icons={<GrLocation/>} head='Location' text='Ikeja Lagos, Nigeria'/>
              <Button text='Submit'/>
              </div>
            </div>
          </div>
        </div>
   </section>
  )
}

export default Banner