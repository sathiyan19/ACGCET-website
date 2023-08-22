import React from "react";

import "./Csedept.css";
import { Backtotop } from "../../widgets";
import { Floatinmenu } from "../../widgets";
import { dept_about_floater } from "../../constants/dept_about";

import { Heroimage } from "../../components";
import cse from "../../assets/pictures/csebg.webp";


const Csedept = () => {
  return (
    <div className="csedept">
      <div className="csebg">
        <div className="cseheading">
          Department of Computer Science and Engineering
        </div>
      </div>
      <section className="csedark">
        <h3>About the Department</h3>
        <div className="csetwo-col">
          <p>
            Department of Computer Science and Engineering (CSE) was established
            in the year 2001 to meet the requirements of the emerging IT
            industries. Department of Computer Science and Engineering offers
            B.E (Computer Science & Engineering) program as full time with the
            sanctioned intake of 60 students. The department has good laboratory
            facilities with latest and updated versions of the software.The department is equipped with well qualified and experienced faculty
          members to improve and enhance the knowledge of the student community.
          
          
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={cse} />
          </div>
        </div>
        <div className="csetwo-col1">
        <p>
          {" "}
          The department conducts periodic workshops, seminars and symposium to
          help students and the research communities/industries to unite in a
          common place and thereby strengthen the industry institute on fusion.
          The Department of Computer Science and Engineering is regularly
          organizing programs like Workshop, Special Seminar and Symposium etc.
          Recognized Research Centre of Anna University, Chennai for pursuing
          Ph.D. in Computer Science and Engineering. Students are encouraged to
          undergo Internship under fast track scheme to improve their placement
          prospects. Campus wide internet facilities are managed by department.
        </p>
      </div>
      </section>
      
      <Backtotop />
    </div>
  );
};

export default Csedept;
