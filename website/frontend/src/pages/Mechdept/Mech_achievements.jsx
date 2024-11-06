import React,{useEffect} from "react";
import "./Mech_achievements.css";
import {
    Backtotop,
    Floatinmenu,
    Underline,
    Content_card
  } from "../../widgets";
  
  import {
    mech_dept_menu,
    mech_stud_achievements
  } from "../../constants/mech_dept";  

import { Radial_menu } from "../../components";

import { BsFillGearFill } from "react-icons/bs";

const Mech_achievements = () => {
  useEffect(() => {
    document.title = 'ACCET-MECH | Achievements';
  }, []);
  return (
    <div className="mechdept">
      <div className="mechbg">
        <div className="mechheading">
          Department of Mechanical Engineering
        </div>
        <div className="mech_sub_heading">Achievements</div>
      </div>
      <section className="csedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
        </div>
        <Radial_menu menu_links={mech_dept_menu} />
        <div className="mech_lab_area mech_card_one">
          <Underline heading="Students Achievements" />
            <div className="iqac_stra_content_card">
                {mech_stud_achievements.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
            </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};


export default Mech_achievements;