import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'

function Result() {
  return (
    <>
        <div className="result">
            <div className="container">
                <div className="result_row">
                    <div className="result_col">
                        <div className="result_head">
                            <h2>Check your COVID-19 result on our Database</h2>
                        </div>
                        <div className="result_input">
                            <div className="input_data">
                            <input type="text" placeholder='Okeowo' /> <br/>
                            <input type="text" placeholder='NIK Number' />
                            <div className="result_button">
                                <Link to='#'>Check</Link>
                            </div>
                            </div>
                            <div className="result_text">
                                <p>Need a certificate for your COVID-19 result? <span><Link to='#'>Please click here</Link></span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Result