import React from "react";

import "./Mechdept.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
  Deptmission,
  Deptvision,
  Content_card
} from "../../widgets";
import {
  mech_dept_menu,
  mech_mission,
  mech_vision,
  mech_progs
} from "../../constants/mech_dept";

import { Radial_menu } from "../../components";
//import cse from "../../assets/pictures/csecover.webp";



import { BsFillGearFill } from "react-icons/bs";
const mech="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/mech/mech_cover.webp"

const Mechdept = () => {
  return (
    <div className="mechdept">
      <div className="mechbg">
        <div className="mechheading">Department of Mechanical Engineering</div>
      </div>
      <section className="mechdark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={BsFillGearFill}
            head="Menu"
            links={mech_dept_menu}
          />
        </div>
        <Radial_menu menu_links={mech_dept_menu} />
        <div className="mech_abt">
          <Underline heading="About the Department" />
          <div className="mechtwo-col">
            <p className="mech_dept_content">
              The Department of Mechanical Engineering was established in the
              year 1952 with the student intake of 40. The sanctioned intake for
              B.E. Mechanical Engineering has been increased to 60 in the year
              1989 and 120 in the year 2009. The department offers Part-Time
              Mechanical Engineering from the year 1971. To scale up in higher
              studies 2 P.G. Programme 1. M.E- Manufacturing Engineering 2.
              M.E.Computer Aided Design (CAD) are offered from the academic year
              2002.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={mech} />
            </div>
          </div>
          <div className="mechtwo-col1">
            <p className="mech_dept_content">
            Since the academic year 2002, the Department has been recognized as a research centre by Anna University. So far the Department has produced more than 50 Ph.D’s in various fields such as Composite materials, Heat transfer, Manufacturing, Robotics and Automation and Additive Manufacturing etc. 
To cater the need of industry and Research, the department laboratories are equipped with modern facilities. Centre of Excellence in Additive Manufacturing was established with financial aid of Government of Tamilnadu in the year 2019. 
Faculty development programmes and technical workshops are regularly organized by the department in emerging areas. The department arranges guest lectures, industrial visit and industrial internships to enhance the employability skill of the students. The students are actively participating in professional society activities like SAE and participated in the National and International technical contests like BAJA, GO-KART, Solar Car, Bicycle and Effi-Cycle.
The Department was accredited by NBA in 2004, subsequently accredited in 2013 and currently retaining its accreditation for 2021-22 to 2023-24. 

            </p>
          </div>
        </div>
        <div className="mech_hod">
          {/* <Underline heading="HOD's Message" /> */}
        </div>
        <div className="mech_vision_mission">
          <Underline heading="Our Vision & Mission" />
          <Deptvision visiondata={mech_vision.visiondata} />
          <Deptmission points={mech_mission} />
        </div>

        <div className="mech_prog_offered">
          <Underline heading="Programs Offered" />
          <div className="mech_progs">
            {mech_progs.map((item) => (
              <Content_card
                key={item.id}
                period={item.period}
                year={item.year}
                top_head={item.top_head}
                heading={item.program}
                intake={item.intake}
              />
            ))}
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Mechdept;
