import React from 'react'

import './profilecard.css'

const Profilecard = ({cover,dp,name,Designation,mailid,pdf,email_overflow}) => {
  return (    
    
      <div className="profile-card">
      
        <img src={cover} className="cover" alt='coverr'/>
        
        <img src={dp} className="dp" alt='dpp'/>
        
        
        <h5>{name}</h5>
        
        
        <p>{Designation}</p>
        <p className={`profile_mail ${email_overflow? "profile_overflow_mail":""}`}>{mailid}</p>
        
        {pdf && (
        <a href={pdf} target='blank' className="view-btn">More Details</a>
        )}
    </div>
    
    
  )
}

export default Profilecard;
