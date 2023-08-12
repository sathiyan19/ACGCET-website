import React from 'react'

import './Eventcard.css'

const Eventcard = ({date,title,time,venue}) => {
  return (
    <div className="col-md-3 colo">
        <div className="event">
            <div className="date">{date}</div>
            <div className="event_card_divider"></div>
            <div className="title">{title}</div>
            <div className="time">{time}</div>
            <div className="venue">{venue}</div>
        </div>
    </div>
  )
}

export default Eventcard