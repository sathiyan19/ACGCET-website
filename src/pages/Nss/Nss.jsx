import React from "react";

import "./Nss.css";
import motto from "../../assets/pictures/mottonss.jpg";
import q1 from "../../assets/pictures/quote1.png"
import q2 from "../../assets/pictures/quote2.png"
import { Heroimagecarousal } from "../../components";
import { Nssheroimagecarousalinfo } from "../../constants/Nssheroimagecarousalinfo";

const Nss = () => {
  return (
    <div>
      {/* hero image */}
      <Heroimagecarousal
        key={Nssheroimagecarousalinfo.id}
        title={Nssheroimagecarousalinfo.title}
        img_list={Nssheroimagecarousalinfo.img_list}
      />
      <div className="mosec">
        <div className="mottosection">
          <div className="mottoimg">
            <img className="mottonss" src={motto} alt="Mottonss" />
          </div>
          <div className="mottotext">
          <sup><img className="q1" src={q1} alt="Mottonss" /></sup>
            <h2>NOT ME BUT YOU</h2>
            <img className="q2" src={q2} alt="Mottonss" />
          </div>
          <div className="mottohead">
            <h1>Our Motto</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nss;
