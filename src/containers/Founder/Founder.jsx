import React from 'react'

import './Founder.css'

import Found from '../../assets/pictures/alagappa.webp'

const Founder = () => {
  return (
    <div className="found">
        <div className="hl1"></div>
        <div className="container-fluid foun">
            <div className="founder">
                <p className="name">Founder: Padma Bhushan Alagappa Chettiar</p>
                <p className="founder-desc">In 1952, Dr. Alagappa Chettiar’s dream came true. Alagappa Chettiar College of Engineering and Technology functioning from 21st July 1952 with three faculties – Civil Engineering, Mechanical Engineering, Electrical & Electronics Engineering.
                    The Foundation tablet for the main building of the college was laid by Dr.Rajendra Prasad, the then President of India on 19th February 1953.</p>
            </div>
            <img src={Found} className="founder-pic" alt="Founder" />
        </div>
        <div className="hl1"></div>
    </div>
  )
}

export default Founder