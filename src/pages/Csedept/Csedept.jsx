import React from "react";

import "./Csedept.css";
import { Backtotop } from "../../widgets";
import { Floatinmenu } from "../../widgets";
import { cse_dept_menu } from "../../constants/cse_dept";

import {Radial_menu } from "../../components";
import cse from "../../assets/pictures/csecover.webp";

import {FaComputer} from 'react-icons/fa6'

const Csedept = () => {
  return (
    <div className="csedept">
      <div className="csebg">
        <div className="cseheading">
          Department of Computer Science and Engineering
        </div>
      </div>
      <section className="csedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
        </div>
        <Radial_menu menu_links={cse_dept_menu}/>
        <div className="cse_abt">
        <h3 className="cse_sub_head">About the Department</h3>
        <div className="csetwo-col">
          <p className="cse_dept_content">
            Department of Computer Science and Engineering (CSE) was established
            in the year 2001 to meet the requirements of the emerging IT
            industries. Department of Computer Science and Engineering offers
            B.E (Computer Science & Engineering) program as full time with the
            sanctioned intake of 60 students. The department has good laboratory
            facilities with latest and updated versions of the software.
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={cse} />
          </div>
        </div>
        <div className="csetwo-col1">
          <p className="cse_dept_content">
          The
            department is equipped with well qualified and experienced faculty
            members to improve and enhance the knowledge of the student
            community.
            The department conducts periodic workshops, seminars and symposium
            to help students and the research communities/industries to unite in
            a common place and thereby strengthen the industry institute on
            fusion. The Department of Computer Science and Engineering is
            regularly organizing programs like Workshop, Special Seminar and
            Symposium etc. Recognized Research Centre of Anna University,
            Chennai for pursuing Ph.D. in Computer Science and Engineering.
            Students are encouraged to undergo Internship under fast track
            scheme to improve their placement prospects. Campus wide internet
            facilities are managed by department.
          </p>
        </div>
        </div>
        <div className="cse_hod">
          
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Csedept;
