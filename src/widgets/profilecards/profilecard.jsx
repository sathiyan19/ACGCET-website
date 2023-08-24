import React from 'react'

import './profilecard.css'

const Profilecard = ({cover,dp,name,Designation,mailid,pdf}) => {
  return (    
    
      <div className="profile-card">
      
        <img src={cover} className="cover" alt='coverr'/>
        
        <img src={dp} className="dp" alt='dpp'/>
        
        
        <h4>{name}</h4>
        
        
        <p>{Designation}</p>
        <p>{mailid}</p>
        
        {pdf && (
        <a href={pdf} className="view-btn">More Details</a>
        )}
    </div>
    
    
  )
}

export default Profilecard;
