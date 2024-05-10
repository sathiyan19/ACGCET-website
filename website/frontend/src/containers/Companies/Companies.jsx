import React from "react";

import "./Companies.css";


import { Underline } from "../../widgets";


import { reccarousal } from '../../constants/home';
import { Slideshow } from '../../components';


// import q1 from "../../assets/pictures/quote1.webp";
const q1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/nss/nss/quote1.webp"
// import q2 from "../../assets/pictures/quote2.webp";
const q2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cocurricular/nss/nss/quote2.webp"

const Companies = () => {
  return (
    <div className="rec">
        <div className="recout1"></div>
        <div className="recout2"></div>
        <div className="recin">
          <div className="rectext">
            <Underline heading="Top Recruiters" />
            <div className="recparasec">
              <img className="recq1" src={q1} alt="Mottonss" />
              <p className="recpara">
                Experience our College's Top Recruiters Section, where
                excellence meets opportunity. Explore the remarkable
                collaborations we've fostered with leading companies, enabling
                our students to embark on successful journeys and impactful
                careers in diverse fields."
              </p>
              <img className="recq2" src={q2} alt="Mottonss" />
            </div>
          </div>
          <div className="recpic">
            <Slideshow images={reccarousal} flag="true" />
          </div>
        </div>
    </div>
  );
};
export default Companies;
