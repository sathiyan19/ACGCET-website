import React from "react";

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
}) => {
  return (
    <div className="content">
      <div className="section">
        <div className="image-container">
          <img src={logoimg} alt="oruimagevaru" />
        </div>
        <div className="description-container">
          <h1>{title}</h1>
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
          <a href={instalink}>
            <i class="fa fa-instagram"></i>
          </a>
          <a href={maillink}>
            <i class="fa fa-envelope"></i>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubscard;
