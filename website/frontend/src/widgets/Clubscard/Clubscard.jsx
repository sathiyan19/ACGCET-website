import React from "react";

import "./Clubscard.css";

const Clubscard = ({
  logoimg,
  title,
  maillink,
  instalink,
  para,
  staff,
  staffdesi,
  student,
  studentdesi,
  infolink,
}) => {
  return (
    <div className="clubcard_content">
      <div className="section">
        <div className="image-container">
          <img src={logoimg} alt="oruimagevaru" />
        </div>
        <div className="description-container">
          <h3>{title}</h3>
        </div>
      </div>

      <div className="desc">
        <div className="text">
          <p>{para}</p>
        </div>
        <div className="coordinates">
          <h4>Staff In-Charge:</h4>
          <h6>{staff}</h6>
          <p>{staffdesi}</p>
          <h4>Student President:</h4>
          <h6>{student}</h6>
          <p>{studentdesi}</p>
        </div>
      </div>
      <div className="connect">
        <div className="icons">
          <div className="callfor">
            <h5>Connect with us on</h5>
          </div>
          <div className="callable">
            {instalink && (
              <a href={instalink}>
                <i class="fa fa-instagram"></i>
              </a>
            )}
            {maillink && (
              <a href={maillink}>
                <i class="fa fa-envelope"></i>
              </a>
            )}
            {infolink && (
              <a href={infolink}>
                <i class="fa fa-info-circle"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubscard;
