import React from "react";

import "./Founder.css";

// import Found from "../../assets/pictures/alagappa.webp";
const Found=" https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/founder/alagappa.webp"

const Founder = () => {
  return (
    <div className="found">
      <div className="hl1"></div>
      <div className="container-fluid foun">
        <div className="founder">
          <p className="name">Founder: Padma Bhushan Alagappa Chettiar</p>
          <p className="founder-desc">
            Alagappa Chettiar, born in 1909 into a prominent Chettiar family in
            Karaikudi, Tamil Nadu, left an indelible mark on the region's
            economic and educational landscape. A successful businessman, he
            expanded his family's enterprises, including banking and finance.
            However, his most enduring legacy lies in education and
            philanthropy. In 1950, he established the Alagappa Chettiar
            Educational Trust, dedicated to promoting education and research.
            The trust's flagship institution, Alagappa Chettiar College of
            Engineering and Technology, stands as a beacon of engineering
            education in Tamil Nadu, contributing significantly to technological
            advancements in the state. Beyond education, Alagappa Chettiar
            actively supported healthcare, community development, and social
            welfare initiatives, contributing to the holistic development of the
            region. His unwavering commitment to education and philanthropy
            earned him recognition and honors, and his legacy continues to
            inspire those dedicated to advancing education and societal progress
            in Tamil Nadu and beyond. 
            {/* In 1952, Dr. Alagappa Chettiar’s dream
            came true. Alagappa Chettiar College of Engineering and Technology
            functioning from 21st July 1952 with three faculties – Civil
            Engineering, Mechanical Engineering, Electrical & Electronics
            Engineering. The Foundation tablet for the main building of the
            college was laid by Dr.Rajendra Prasad, the then President of India
            on 19th February 1953. */}
          </p>
        </div>
        <img src={Found} className="founder-pic" alt="Founder" />
      </div>
      <div className="hl1"></div>
    </div>
  );
};

export default Founder;
