import React from 'react'

import './Eventcard.css'

const Eventcard = ({date,title,time,venue,cal_link}) => {
  return (
    <div className="col-md-3 colo">
        <div className="event">
            <div className="date">{date}</div>
            <div className="event_card_divider"></div>
            <div className="title">{title}</div>
            <div className="time">{time}</div>
            <div className="venue">{venue}</div>
            <a href={cal_link} className='event_cal_add' target='blank'>Add to Calendar</a>
        </div>
    </div>
  )
}

export default Eventcard