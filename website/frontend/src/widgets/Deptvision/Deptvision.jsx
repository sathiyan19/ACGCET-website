import React from 'react'

import "./Deptvision.css"
import { IoTelescopeSharp } from "react-icons/io5";

const Deptvisionmission = ({visionhead,visiondata}) => {
  return (
    <div>
        <div className="vissionholder">
          <div className="visionchip">
            <div className="visionhead">
              <div className="visionlogosec">
                <IoTelescopeSharp className="visionlogo" />
                &nbsp;&nbsp;{visionhead ? visionhead : 'Vision'}
              </div>
            </div>
            <p>
              {visiondata}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Deptvisionmission