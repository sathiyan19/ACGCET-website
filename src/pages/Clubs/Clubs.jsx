import React from "react";

import "./Clubs.css";
import { Clubscard } from "../../widgets";
import { clubsinfo } from "../../constants/clubscardinfo";


const Clubs = () => {
  return (
    <div>
      {/* hero image */}
      <div className="clubs_hero">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Clubs at ACGCET</h1>
          </div>
        </div>
      </div>

      {/* description section */}
      <div className="clubs_desc">
        <p>
          We offer our students a vital avenue for holistic growth, enabling
          them to pursue passions, refine skills, and build a sense of
          belonging. Through diverse club activities, students develop not only
          academically but also in essential life skills like teamwork,
          leadership, and communication, resulting in a well-rounded education.
          These experiences nurture socially aware, confident, and adaptable
          individuals prepared for real-world challenges.
        </p>
      </div>

      {clubsinfo.map((item)=><Clubscard key={item.id} logoimg={item.logoimg} title={item.title} maillink={item.maillink} instalink={item.instalink} para={item.para} staff={item.staff} staffdesi={item.staffdesi} student={item.student} studentdesi={item.studentdesi} />)}


    </div>
  );
};

export default Clubs;
