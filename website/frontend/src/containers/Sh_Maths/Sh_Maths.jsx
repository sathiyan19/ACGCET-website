import React from 'react'
import { Backtotop,Floatinmenu,Deptvision,Deptmission,Underline,Content_card } from "../../widgets";

import { Radial_menu } from "../../components";
// import maths from "../../assets/pictures/maths.webp";

import { Maths_dept_fmenu,mat_vision,mat_mission } from '../../constants/maths_dept';
import './Sh_Maths.css'
import { VscSymbolOperator } from "react-icons/vsc";

const maths="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/maths.webp"

const Sh_Maths = () => {
  return (
    <div>
       <section className="shmatdark">
        <div className="shmatdept_float_menu">
          <Floatinmenu logo={VscSymbolOperator} head="Menu" links={Maths_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Maths_dept_fmenu} />
        <div className="shmat_abt_area">
        <div className="shmat_abt">
        <Underline heading="About the Department"/>
        <div className="shmattwo-col">
          <p className="shmat_dept_content">
          It is well known that Mathematics is one of the most important subjects for all UG and PG courses in Engineering. Department of Mathematics of this esteemed institution was established in the year 1952. Dr.M.K.Venkataraman and Prof.T.Veerarajan renowned the chariots of this department. 
          In memory of Dr.M.K.Venkataraman, one of our college boys’ hostel has been named as Dr.M.K.Venkataraman Illam which was built by our Alumni.
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={maths} />
          </div>
        </div>
        <div className="shmattwo-col1">
          <p className="shmat_dept_content">
          The department has well qualified and experienced faculty members. The department trains engineering students in strong mathematical background to enhance and apply their skills to find solutions for problems in engineering. 
          At present, the department consists of 8 faculty members among which 3 are with doctorate degree in various fields. </p>
        </div>
        </div>
        {/* <div className="ece_hod">
          <Underline heading="HOD's Message"/>
        </div> */}
        <div className="ece_vision_mission">
          <Underline heading="Our Vision & Mission"/>
        <Deptvision visiondata={mat_vision.visiondata} />
        <Deptmission points={mat_mission}/>
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

export default Sh_Maths
