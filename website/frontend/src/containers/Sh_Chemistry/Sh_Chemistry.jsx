import React from 'react'
import './Sh_Chemistry.css'

import { Backtotop,Floatinmenu,Deptvision,Deptmission,Underline,Content_card } from "../../widgets";

import { Radial_menu } from "../../components";
// import chem from "../../assets/pictures/chem.webp";
import {Sh_dept_fmenu,chemi_mission,chemi_vision} from '../../constants/Sh_dept_menu'

import { GrTest } from "react-icons/gr";

const chem="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/chem.webp"


const Sh_Chemistry = () => {
  return (
    <div>
      <section className="shchemidark">
        <div className="shchemidept_float_menu">
          <Floatinmenu logo={GrTest} head="Menu" links={Sh_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Sh_dept_fmenu} />
        <div className="shchemi_abt_area">
        <div className="shchemi_abt">
        <Underline heading="About the Department"/>
        <div className="shchemitwo-col">
          <p className="shchemi_dept_content">
          The academic activities of the department are supported highly qualified and experienced faculties who pursue research in the frontier areas of science.
          The department has the state of the art instrumentation facilities for thermal, electrochemical and spectroscopic characterization of materials and well furnished laboratory.
          The department conducts Faculty Development Programmes and Short Term courses periodically to spread awareness about Chemistry and the Environment. </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={chem} />
          </div>
        </div>
        <div className="shchemitwo-col1">
          <p className="shchemi_dept_content">
          Research is carried out in various thrust areas like Computational Chemistry, polymer science and technology, material Science, Nano composite materials, Electro Chemistry, Corrosion and Physical chemistry by the faculty in the department.
          The department carries out collaborative research programmes with  colleges/universities/institutes. </p>
        </div>
        </div>
        {/* <div className="ece_hod">
          <Underline heading="HOD's Message"/>
        </div> */}
        <div className="ece_vision_mission">
          <Underline heading="Our Vision & Mission"/>
        <Deptvision visiondata={chemi_vision.visiondata} />
        <Deptmission points={chemi_mission}/>
        </div>
        {/* <div className="ece_prog_offered">
          <Underline heading="Programs Offered"/>
          <div className="ece_progs">
            {ece_progs.map((item)=><Content_card key={item.id} period={item.period} year={item.year} top_head={item.top_head} heading={item.program} intake={item.intake}/>)}
          </div>
        </div> */}
        </div>

        {/* {progressinfo.map((item)=><Progressbar bigperc={item.bigperc} smallperc={item.smallperc}/>)} */}
      </section>
      <Backtotop/>
    </div>
  )
}

export default Sh_Chemistry;
