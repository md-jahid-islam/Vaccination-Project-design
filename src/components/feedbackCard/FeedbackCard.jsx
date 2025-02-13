import React from 'react'
import './FeedbackCard.css'

function FeedbackCard({FeedbackCardImg, FeedbackCardHead, FeedbackCardHeadTow, FeedbackCardText}) {
  return (
    <>
        <div className="FeedbackCard">
            <div className="FeedbackCard_row">
                <div className="FeedbackCard_col">
                    <div className="FeedbackCard_img">
                        <img src={FeedbackCardImg} alt="FeedbackCard_img" />
                    </div>
                    <div className="FeedbackCard_head">
                        <h1>{FeedbackCardHead}</h1>
                        <h2>{FeedbackCardHeadTow}</h2>
                    </div>
                </div>
                <div className="FeedbackCard_text">
                    <p>{FeedbackCardText}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeedbackCard