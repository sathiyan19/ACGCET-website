import React,{useEffect} from "react";

import "./Clubs.css";
import { Clubscard,Backtotop } from "../../widgets";
import { Heroimagecarousal } from "../../components";
import { Clubs_heroimage_carousalinfo,Clubs_info } from "../../constants/Clubs";

const Clubs = () => {
  useEffect(() => {
    document.title = 'ACCET-Clubs';
  }, []);
  return (
    <div>
      <Backtotop/>
      {/* hero image */}
      <Heroimagecarousal
        key={Clubs_heroimage_carousalinfo.id}
        title={Clubs_heroimage_carousalinfo.title}
        img_list={Clubs_heroimage_carousalinfo.img_list}
      />

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

      {Clubs_info.map((item) => (
        <Clubscard
          key={item.id}
          logoimg={item.logoimg}
          title={item.title}
          maillink={item.maillink}
          instalink={item.instalink}
          para={item.para}
          staff={item.staff}
          staffdesi={item.staffdesi}
          student={item.student}
          studentdesi={item.studentdesi}
          infolink={item.infolink}
        />
      ))}
    </div>
  );
};

export default Clubs;
