import React from 'react';
import './Opening.css';

const Opening = ({ top_head, heading, click }) => {
  return (
    <div className="opening_card">
      <div className="opening_body">
        <div className="opening_bg"></div>

        {top_head && <div className="opeing_top_head">{top_head}</div>}
     
        <div className="opening_title">{heading}
        </div>
        
        {click && (
          
          <a
            className="opening_sub_link"
            href={click}
            rel="noopener noreferrer"
          >
            
            <div className="heading">
              Click here&nbsp;
            </div> 
           
          </a>
          
        )}
      </div>
    </div>
    
  );
};

export default Opening;
