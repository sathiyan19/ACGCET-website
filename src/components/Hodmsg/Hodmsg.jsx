import React from 'react'

import './Hodmsg.css'

import q1 from "../../assets/pictures/quote1.png";

const Hodmsg = ({pic,name,designation,content}) => {
  return (
    <div className="hhoodd">
        <div className="quo">
          <img src={q1} alt="quote1vaanga" />
        </div>
        <section className="hodmsg">
          <div className="hodmesg">
            <div className="hoddiv_cont">
              <p className="hodcont">
                {content}
              </p>
            </div>

            <div className="hoddp">
              <img src={pic} alt="Profile_pic" />
            </div>

            <div className="hoddet1">
              <h3>{name}</h3>
              <p>{designation}</p>
            </div>
          </div>

          <div className="hoddet">
            <h3>{name}</h3>
            <p>{designation}</p>
          </div>
        </section>
      </div>
  )
}

export default Hodmsg