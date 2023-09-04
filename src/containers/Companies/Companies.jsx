import React from "react";

import "./Companies.css";

import zoho from "../../assets/pictures/zoho.webp";
import hcl from "../../assets/pictures/hcl.webp";
import lt from "../../assets/pictures/lt.webp";
import gofrugal from "../../assets/pictures/gofrugal.webp";
import wipro from "../../assets/pictures/wipro.webp";
import whiteblue from "../../assets/pictures/whiteblue.webp";
import { Underline } from "../../widgets";


import './Companies.css'
import { reccarousal } from '../../constants/home';
import { Slideshow } from '../../components';

import zoho from '../../assets/pictures/zoho.webp'
import hcl from '../../assets/pictures/hcl.webp'
import lt from '../../assets/pictures/lt.webp'
import gofrugal from '../../assets/pictures/gofrugal.webp'
import wipro from '../../assets/pictures/wipro.webp'
import whiteblue from '../../assets/pictures/whiteblue.webp'

import q1 from "../../assets/pictures/quote1.png";
import q2 from "../../assets/pictures/quote2.png";
const reccarousal=[
    zoho,
    hcl,
    lt,
    gofrugal,
    wipro,
    whiteblue
  ]
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
        <a href="/" className="know">Know More</a>
    </div>
  )
}
