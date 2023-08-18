import React from 'react'

import './Content_card.css'

const Content_card = ({heading,intake}) => {
  return (
    <div className="cont_card">
      <div className="card_body">
        <div className="card_bg"></div>

        <div className="card_title">
          {heading}
        </div>

        <div className="card_sub">
          Intake:&nbsp;
          <span className="card_detail">
            {intake}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Content_card