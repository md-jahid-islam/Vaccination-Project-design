import React from 'react'
import './Symptoms.css'

function Symptoms() {
  return (
    <>
        <div className="symptoms">
            <div className="container">
                <div className="symptoms_row">
                    <div className="symptoms_col">
                        <div className="symptoms_text">
                            <h1>Covid-19 Prevention</h1>
                            <h2>COVID-19 <span>Symptoms</span></h2>
                            <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                            Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                        </div>
                        <div className="symptoms_img">
                            <img src="images/symptoms.png" alt="symptoms img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Symptoms