import React from 'react'

import './Milestones.css'

import { milestones } from '../../constants/milestones'

import mile from '../../assets/pictures/mile.webp'

const Milestones = () => {
  return (
    <div className="tab">
        <div className="headingsec">
            <div className="imghead">
                <img className="pic" src={mile} alt="Milestones" />
            </div>
            <div className="heading">
                <h1>Milestones</h1>
            </div>
        </div>
        <table>
            <tr>
                <th>YEAR</th>
                <th className="achieve">ACHIEVEMENTS</th>
            </tr>

            {milestones.map((item)=><tr><td>{item.year}</td><td>{item.achieve}</td></tr>)}    
        
        </table>
    </div>
  )
}

export default Milestones