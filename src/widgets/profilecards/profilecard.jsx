import React from 'react'

import './profilecard.css'

const Profilecard = ({cover,dp,name,Designation,mailid}) => {
  return (    
    
      <div className="profile-card">
      
        <img src={cover} className="cover" alt='coverr'/>
        
        <img src={dp} className="dp" alt='dpp'/>
        
        
        <h4>{name}</h4>
        
        
        <p>{Designation}</p>
        <p>{mailid}</p>
        
        
        <a href="#home" className="view-btn">More Details</a>
    </div>
    
    
  )
}

export default Profilecard;
