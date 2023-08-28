import React from "react";

import "./Eeedept.css";
import {
  Backtotop,
  Floatinmenu,
  Underline,
  Deptmission,
  Deptvision,
  Content_card
} from "../../widgets";
import {
  eee_dept_menu,
  eee_mission,
  eee_vision,
  eee_progs
} from "../../constants/eee_dept";

import { Radial_menu } from "../../components";
import cse from "../../assets/pictures/csecover.webp";

import { AiFillThunderbolt } from "react-icons/ai";

const Eeedept = () => {
  return (
    <div className="eeedept">
      <div className="eeebg">
        <div className="eeeheading">
          Department of Electrical and Electronics Engineering
        </div>
      </div>
      <section className="eeedark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={AiFillThunderbolt}
            head="Menu"
            links={eee_dept_menu}
          />
        </div>
        <Radial_menu menu_links={eee_dept_menu} />
        <div className="eee_abt">
          <Underline heading="About the Department" />
          <div className="eeetwo-col">
            <p className="eee_dept_content">
              Electrical and Electronic Engineers work at the forefront of
              practical technology. This field of Engineering and Technology has
              a major contribution to society, which we are enjoying and
              witnessing today. This importance makes the Electrical and
              Electronics Engineering branch to stay ever green on top of all
              other Engineering branches as well. Our department was started in
              1952. Faculty members are working with around 600 students of
              undergraduate, postgraduate, and research programmes.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={cse} />
            </div>
          </div>
          <div className="eeetwo-col1">
            <p className="eee_dept_content">
              Its our pleasure and pride to provide highly skilled technological
              manpower to solve interesting problems at various renowned
              Electrical And Electronics Industries. To keep our academic
              programmes inline with the current industrial needs, with the help
              of all stakeholders continuous and concerted efforts are being
              taken to revamp the curriculum.
            </p>
            <p className="eee_dept_content">
              The department moves with a vision to produce competent and
              disciplined globally accepted Electrical Engineers. The department
              has state of the art facilities for various laboratories like
              Centre for Internet of Things “Next Gen Internet of Things
              Laboratory”, Smart Grid Laboratory, Special Electrical Machines
              Laboratory, Solar plants as well as classrooms to support
              e-learning through the department library.
            </p>
            <p className="eee_dept_content">
              For the past seven decades, the department has been producing
              numerous outstanding Engineers for the country. Many of our alumni
              have registered notable contributions in their industrial,
              research and academic professions. Guest lectures and industrial
              visits are periodically arranged for the students and faculty
              members to supplement their curriculum. The department strives for
              all round excellence in students. As a team, I wish to continue to
              provide outcome based quality education for the generations to
              come.
            </p>
          </div>
        </div>
        <div className="eee_hod">
          <Underline heading="HOD's Message" />
        </div>
        <div className="eee_vision_mission">
          <Underline heading="Our Vision & Mission" />
          <Deptvision visiondata={eee_vision.visiondata} />
          <Deptmission points={eee_mission} />
        </div>

        <div className="eee_prog_offered">
          <Underline heading="Programs Offered"/>
          <div className="eee_progs">
            {eee_progs.map((item)=><Content_card key={item.id} period={item.period} year={item.year} top_head={item.top_head} heading={item.program} intake={item.intake}/>)}
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Eeedept;
