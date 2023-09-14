import React from "react";

import "./Civildept.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
  Deptmission,
  Deptvision,
  Content_card,
} from "../../widgets";
import {
  civ_dept_menu,
  civ_mission,
  civ_vision,
  civ_progs,
  about_info
} from "../../constants/civil_dept";

import { Radial_menu,Listformat } from "../../components";
import civil from "../../assets/pictures/civilabt.webp";

import { BsFillBuildingsFill } from "react-icons/bs";

const Civildept = () => {
  return (
    <div className="civdept">
      <div className="civbg">
        <div className="civheading">Department of Civil Engineering</div>
      </div>
      <section className="civdark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={BsFillBuildingsFill}
            head="Menu"
            links={civ_dept_menu}
          />
        </div>
        <Radial_menu menu_links={civ_dept_menu} />
        <div className="civ_abt">
          <Underline heading="About the Department" />
          <div className="civtwo-col">
            <p className="civ_dept_content">
            The Department of Civil Engineering was established in the year of 1952. The Department is offering UG Courses in Civil Engineering (Both Full time and Time) and PG Courses in Structural Engineering & Environmental Engineering. The Civil Engineering course has a sanctioned intake of 60 in regular and 60 in Part Time Course. The PG courses have a sanctioned intake of 18 in each. Department is filled with professors, researchers, and support staff who are experts in various fields of Civil Engineering. They play a crucial role in teaching students, conducting research, and providing guidance.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={civil} />
            </div>
          </div>
          <div className="civtwo-col1">
            <p className="civ_dept_content">
            The department has well equipped Laboratories with all kinds of Sophisticated Equipments and Instruments, Research Centre, Virtual Classroom, Library and Excellent Computer Centre. These resources support both research and student learning. Faculty members are actively engaging in research activities to advance the field. Faculty members work on consultancy projects related to infrastructure design, testing on construction materials, stability check and third-party inspection etc. Our department has Civil Engineering Association (CEA), Standard club and Institution of Engineer (IEI) that provide opportunities for students to network, gain practical experience, and engage in extracurricular activities related to civil engineering. The Department of Civil Engineering is regularly organizing programs like International Conference, National Conference, Workshop, Special Seminar and Symposium etc. some of the highlights are,
            </p>
          </div>
          <div className="civ_spec_outcomes">
                <Listformat points={about_info}/>
              </div>
        </div>
        {/* <div className="civ_hod">
          <Underline heading="HOD's Message" />
        </div> */}
        <div className="civ_vision_mission">
          <Underline heading="Our Vision & Mission" />
          <Deptvision visiondata={civ_vision.visiondata} />
          <Deptmission points={civ_mission} />
        </div>
        <div className="civ_prog_offered">
          <Underline heading="Programs Offered" />
          <div className="civ_progs">
            {civ_progs.map((item) => (
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

export default Civildept;
