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
} from "../../constants/civil_dept";

import { Radial_menu } from "../../components";
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
              The Department of Civil Engineering was established in the year of
              1952. The Department is offering UG Courses in Civil
              Engineering(Both Full time and Time) and PG Courses in Structural
              Engineering & Environmental Engineering. The Civil Engineering
              course has a sanctioned intake of 60 in regular and 60 in Part
              Time Course. The PG courses have a sanctioned intake of 18 in
              each.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={civil} />
            </div>
          </div>
          <div className="civtwo-col1">
            <p className="civ_dept_content">
              The Department has a team of well qualified, energetic and
              dedicated faculty members. Out of 13 regular faculty 9 have
              doctoral degree. 2 Contractual and 2 Adhocfaculty are also serving
              for the department. The department has well equipped Laboratories
              with all kinds of Sophisticated Equipments and Instruments,
              Research Centre, Virtual Class Room, Library and Excellent
              Computer Centre. Faculty members are actively involved in Research
              and Consultancy Services. The Department of Civil Engineering is
              regularly organizing programs like International Conference,
              National Conference, Workshop, Special Seminar and Symposium etc.
            </p>
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
