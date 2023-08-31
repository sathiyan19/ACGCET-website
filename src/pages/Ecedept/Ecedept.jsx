import React from "react";

import "./Ecedept.css";
import { Backtotop,Floatinmenu,Deptvision,Deptmission,Underline,Content_card,Progressbar } from "../../widgets";
import { ece_dept_menu,ece_mission,ece_vision,ece_progs,progressinfo } from "../../constants/ece_dept";

import { Radial_menu } from "../../components";
import ece from "../../assets/pictures/group-pic.webp";

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
        <div className="ece_abt_area">
        <div className="ece_abt">
        <Underline heading="About the Department"/>
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
            <img className="dept_img" src={ece} />
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
          <Underline heading="HOD's Message"/>
        </div>
        <div className="ece_vision_mission">
          <Underline heading="Our Vision & Mission"/>
        <Deptvision visiondata={ece_vision.visiondata} />
        <Deptmission points={ece_mission}/>
        </div>
        <div className="ece_prog_offered">
          <Underline heading="Programs Offered"/>
          <div className="ece_progs">
            {ece_progs.map((item)=><Content_card key={item.id} period={item.period} year={item.year} top_head={item.top_head} heading={item.program} intake={item.intake}/>)}
          </div>
        </div>
        </div>

        {/* {progressinfo.map((item)=><Progressbar bigperc={item.bigperc} smallperc={item.smallperc}/>)} */}
      </section>

      <Backtotop />
    </div>
  );
};

export default Ecedept;
