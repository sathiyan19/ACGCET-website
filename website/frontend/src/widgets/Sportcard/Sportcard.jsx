import React from "react";

import './Sportcard.css'

const Sportcard = ({ img, head,points }) => {
  return (
    <div className="sport_card_frame">

      <div className="sport_card_topsec">
        <div className="sport_card_img_holder">
          <img className="sport_card_img" src={img} />
        </div>
        <div className="sport_card_team_head">{head}</div>
      </div>

      <div className="sport_card_point_sec">
        {points}pts
      </div>
    </div>
  );
};

export default Sportcard;
