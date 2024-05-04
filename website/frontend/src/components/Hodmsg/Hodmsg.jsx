import React from 'react'

import './Hodmsg.css'

// import q1 from "../../assets/pictures/quote1.webp";
const q1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/nss/nss/quote1.webp"
// import dp from "../../assets/pictures/dp.jpg";

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
              <img className='hoddpi' src={pic} alt="Profile_pic" />
            </div>

            <div className="hoddet1">
              <h3 className='hoddet1h'>{name}</h3>
              <p className='hoddet1p'>{designation}</p>
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