import React from 'react'

import "./Reunion_card.css";

const Reunion_card = ({cover,batch,name,desc,date}) => {
  return (
    <div className="reunion_card">
              <div className="reunion_img_holder">
                <img src={cover} className="reunion_img" />
              </div>
              <div className="reunion_content">
                <div className="reunion_batch">{batch}</div>
                <div className="reunion_name">{name}</div>
                <div className="reunion_desc">
                  {desc}
                </div>
                <div className="reunion_holder">
                <div className="reunion_date">{date}</div>
                </div>
              </div>
            </div>
  )
}

export default Reunion_card