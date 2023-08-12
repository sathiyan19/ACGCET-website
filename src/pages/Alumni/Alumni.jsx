import React from "react";

import "./Alumni.css";

import { Modal } from "../../widgets";
import { contributions } from "../../constants/alumni_info";

import accetosa_logo from "../../assets/pictures/logo-cms.webp";

const Alumni = () => {
  return (
    <div className="alumni_body">
      <div className="container alumni-menu">
        <a href="#about" className="lin">
          About
        </a>
        <a href="#contribution" className="lin">
          Contributions
        </a>
        <a href="#" className="lin">
          Reunions
        </a>
      </div>

      <div className="divider"></div>

      <div className="about">
        <p className="heading" id="about">
          About us
        </p>
        <div className="abt">
          <div className="accetosa">
            <img
              className="accetosa-logo"
              src={accetosa_logo}
              alt="ACGCET Logo"
            />
            <div className="socialmedia">
              <p className="cont">Get in touch with us</p>
              <div className="acicon">
                <a href="#" className="fa fa-facebook-square accicon"></a>
              </div>
              <div className="acicon">
                <a
                  href="https://alumni.accetosa.org/home.dz"
                  className="fa fa-globe accicon"
                ></a>
              </div>
            </div>
          </div>
          <div className="dsc">
            ACGCET, a leader in higher education in engineering and technology,
            is committed to excellence through the delivery of outstanding
            undergraduate and graduate education that remains current and
            responsive to the diverse needs of those it serves. The
            institution’s faculty and staff promote the intellectual,
            professional, social, and personal development of its students
            through innovations in learning, scholarship, and creative
            endeavours. Students, faculty, and staff partner to create strong
            engagement with the local, national, and global communities. The
            institution dedicates itself to academic vitality, integrity, and
            diversity.
          </div>
        </div>
        <div className="abt-cont">
          Our Commitment as a Centre of Engineering Education is to impart
          Technical Knowledge par excellence, motivate the learners in Research,
          evolve result-oriented, innovative techniques in Engineering, provide
          necessary career guidance, and train our learners in leadership
          qualities so as to achieve better productivity and prosperity for our
          country.
        </div>
      </div>

      <div className="contrib">
        <div id="contribution" className="heads">
          Contributions
        </div>
        <div className="gyro row row-cols-2 g-4">

          {contributions.map((item)=>
            <Modal heading={item.heading} sub_text={item["sub-head"]} pic={item.pic} content_1={item.content_1} content_2={item.content_2}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
