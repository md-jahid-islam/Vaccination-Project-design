import React from 'react'
import './Feedback.css'
import FeedbackCard from '../feedbackCard/FeedbackCard'

function Feedback() {
  return (
    <>
        <div className="feedback">
            <div className="container">
                <div className="feedback_row">
                    <div className="feedback_col">
                        <div className="feedback_text">
                            <h1>FEEDBACK</h1>
                            <h2>What our Patients Think</h2>
                            <p>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                            Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                        </div>
                        <div className="feedback_card">
                            <FeedbackCard FeedbackCardImg={"images/Rectangle 25.png"} FeedbackCardHead='Oyindamola Maja' FeedbackCardHeadTow='Badagry, Lagos'
                            FeedbackCardText='“Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng”'    />
                            <FeedbackCard FeedbackCardImg={"images/Rectangle 24.png"} FeedbackCardHead='Okeowo Lekan' FeedbackCardHeadTow='Ikeja, Lagos'
                            FeedbackCardText='“Got my vaccine very close to my house. Was very easy scheduling an appointment.”'    />
                            <FeedbackCard FeedbackCardImg={"images/Rectangle 26.png"} FeedbackCardHead='Kafaru Temitope' FeedbackCardHeadTow='Obanikoro, Lagos'
                            FeedbackCardText='“Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng”'    />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Feedback