import React from "react";

import "./Ecedept.css";
import { Backtotop } from "../../widgets";
import { Floatinmenu } from "../../widgets";
import { ece_dept_menu } from "../../constants/ece_dept";

import { Radial_menu } from "../../components";
import cse from "../../assets/pictures/csecover.webp";

import { FaMicrochip } from "react-icons/fa6";

const Ecedept = () => {
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_abt">
        <h3 className="ece_sub_head">About the Department</h3>
        <div className="ecetwo-col">
          <p className="ece_dept_content">
            The Department of Electronics and Communication Engineering was
            established during the year 1968 to produce competent engineers in
            the field of Electronics and Communication Engineering. At present,
            the intake is 60 students and 12 students in addition through
            Lateral entry. The Department offers undergraduate degree programme
            of B.E (Electronics and Communication Engineering) and postgraduate
            degree programme of M.E (Optical Communication).
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={cse} />
          </div>
        </div>
        <div className="ecetwo-col1">
          <p className="ece_dept_content">
            The Department has state-of-the-art laboratory facilities to infuse
            practical knowledge to the students on par with academic excellence.
            The Department has excellent and consistent placement record and
            most of the eligible students are placed in reputed
            organizations.The Department actively involved in teaching and
            research in disparate subfields of Electronics, Telecommunication,
            Signal Processing, RF Circuits Design, Optical Communication, VLSI
            Design and Cyber Physical Systems. The Department faculties have
            good number of publications. The ECE Department has been recognized
            as a collaborative research centre by Anna University, Chennai.
          </p>
        </div>
        </div>
        <div className="ece_hod">
          
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ecedept;
