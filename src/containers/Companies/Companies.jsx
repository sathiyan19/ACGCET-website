import React from 'react'

import './Companies.css'
import { Underline } from "../../widgets";
import { reccarousal } from '../../constants/home';
import { Slideshow } from '../../components';

import q1 from "../../assets/pictures/quote1.png";
import q2 from "../../assets/pictures/quote2.png";

const Companies = () => {
  return (
    <div className="rec">
        <div className="recout1"></div>
        <div className="recout2"></div>
        <div className="recin">
          <div className="rectext">
            <Underline heading="Top Recruiters" />
            <div className="recparasec">
              <img className="q1" src={q1} alt="Mottonss" />
              <p className="recpara">
                Experience our College's Top Recruiters Section, where
                excellence meets opportunity. Explore the remarkable
                collaborations we've fostered with leading companies, enabling
                our students to embark on successful journeys and impactful
                careers in diverse fields."
              </p>
              <img className="q2" src={q2} alt="Mottonss" />
            </div>
          </div>
          <div className="recpic">
            <Slideshow images={reccarousal} />
          </div>
        </div>
      </div>
  )
}

export default Companies