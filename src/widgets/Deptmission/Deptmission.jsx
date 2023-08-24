import React from 'react'

import './Deptmission.css'

import { GiBullseye } from "react-icons/gi";

const Deptmission = ({points}) => {
  return (
    <div className="missionholder">
          <div className="missionchip">
            <div className="missionhead">
              <div className="missionlogosec">
                Mission&nbsp;&nbsp;
                <GiBullseye className="missionlogo" />
              </div>
            </div>
            <ul>
              {points.map((item)=><li key={item.id}>{item.mission}</li>)}
            </ul>
          </div>
        </div>
  )
}

export default Deptmission