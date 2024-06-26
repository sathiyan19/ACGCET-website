import React from 'react'
import './Sh_Physics.css'

import { Backtotop,Floatinmenu,Deptvision,Deptmission,Underline,Content_card } from "../../widgets";

import { Radial_menu } from "../../components";
// import phy from "../../assets/pictures/phy.webp";
import {Physics_dept_fmenu,phy_mission,phy_vision} from '../../constants/physics_dept'

import { GiPendulumSwing } from "react-icons/gi";

const phy="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/phy.webp"

const Sh_Physics = () => {
  return (
    <div>
       <section className="shphydark">
        <div className="shphydept_float_menu">
          <Floatinmenu logo={GiPendulumSwing} head="Menu" links={Physics_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Physics_dept_fmenu} />
        <div className="shphy_abt_area">
        <div className="shphy_abt">
        <Underline heading="About the Department"/>
        <div className="shphytwo-col">
          <p className="shphy_dept_content">
          The Physics department of ACCET was established in the year 1952 to impart a state-of-the art education, training and then later to develop research activities in the field of physics. The department is well equipped with the best, cost and time effective research equipments such as XRD, planar Magnetron RF/DC Sputtering Coating unit and Digital Source Meter, etc., to develop thin film Technology. The department offers valuable research support using XRD to the research scholars in Tamil Nadu.
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={phy} />
          </div>
        </div>
        <div className="shphytwo-col1">
          <p className="shphy_dept_content">
          The department is endorsed with highly qualified faculty having scientific vigour and committed to Excellence. </p>
        </div>
        </div>
        {/* <div className="ece_hod">
          <Underline heading="HOD's Message"/>
        </div> */}
        <div className="ece_vision_mission">
          <Underline heading="Our Vision & Mission"/>
        <Deptvision visiondata={phy_vision.visiondata} />
        <Deptmission points={phy_mission}/>
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

export default Sh_Physics
