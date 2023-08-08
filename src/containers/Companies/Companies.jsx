import React from 'react'

import './Companies.css'

import zoho from '../../assets/pictures/zoho.webp'
import hcl from '../../assets/pictures/hcl.webp'
import lt from '../../assets/pictures/lt.webp'
import gofrugal from '../../assets/pictures/gofrugal.webp'
import wipro from '../../assets/pictures/wipro.webp'
import whiteblue from '../../assets/pictures/whiteblue.webp'

const Companies = () => {
  return (
    <div className="container-fluid box">
        <p className="recruit">Top Recruiters</p>
        <div className="row placement row-cols-2 row-cols-md-4">
            <div className="col mob">
                <div className="p-3 "><img className="comp" src={zoho} alt="Zoho" /></div>
            </div>
            <div className="col mob">
                <div className="p-3 "><img className="comp" src={hcl} alt="HCL" /></div>
            </div>
            <div className="col mob">
                <div className="p-3 "><img className="comp" src={lt} alt="L&T" /></div>
            </div>
            <div className="col mob">
                <div className="p-3 "><img className="comp" src={gofrugal} alt="GoFrugal" /></div>
            </div>
            <div className="col mob">
                <div className="p-3 "><img className="comp" src={wipro} alt="Wipro" /></div>
            </div>
            <div className="col mob">
                <div className="p-3 "><img className="comp" src={whiteblue} alt="WhiteBlue" /></div>
            </div>
        </div>
        <a href="/" className="know">Know More</a>
    </div>
  )
}

export default Companies