import React from 'react'
import "./Sports_achievement.css"
import {
    
    sport_achivement_info,
    
  } from "../../constants/sports";
  import { Underline,Modal } from "../../widgets";
function Sports_achievement() {
  return (
    <div className="sports_events">
<Underline heading="Achivements" />
<div className="lab_cards row">
  {sport_achivement_info.map((item) => (
    <Modal
      heading={item.heading}
      pic={item.pic}
     
      sub_text={item["sub-head"]}
    />
  ))}
</div>
</div>
  )
}

export default Sports_achievement
