import React from 'react'
import './ScheduleButton.css'
import { GrLocation } from 'react-icons/gr'
function ScheduleButton({icons, head, text}) {
  return (
    <>
        <div className="schedule_button">
            <div className='icons'>
                {icons}
            </div> 
            <div className="sch_text">
            <h2>{head}</h2>
            <p>{text}</p>
            </div>
        </div>
    </>
  )
}

export default ScheduleButton