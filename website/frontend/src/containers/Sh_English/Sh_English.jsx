import React from 'react'
import { Backtotop,Floatinmenu,Deptvision,Deptmission,Underline,Content_card } from "../../widgets";

import { Radial_menu } from "../../components";
// import eng from "../../assets/pictures/eng.webp";
import {English_dept_fmenu,eng_mission,eng_vision} from '../../constants/english_dept'

import './Sh_English.css'
import { RiEnglishInput } from "react-icons/ri";

const eng="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/eng.webp"

const Sh_English = () => {
  return (
    <div>
      <section className="shengdark">
        <div className="shengdept_float_menu">
          <Floatinmenu logo={RiEnglishInput} head="Menu" links={English_dept_fmenu} />
        </div>
        <Radial_menu menu_links={English_dept_fmenu} />
        <div className="sheng_abt_area">
        <div className="sheng_abt">
        <Underline heading="About the Department"/>
        <div className="shengtwo-col">
          <p className="sheng_dept_content">
          The department strives relentlessly to assist the students in developing their communicative skills.  
          Various programmes are constantly organized to motivate and train the students to take up IELTS and TOEFL exams.  
          The department organizes and conducts various programmes for students to develop their language skills.  
          Orientation programmes are also conducted for foreign languages to create awareness among students to learn foreign languages
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={eng} />
          </div>
        </div>
        <div className="shengtwo-col1">
          <p className="sheng_dept_content">
          The department conducts Faculty development programmes and Teacher training programmes to empower the teachers in innovative teaching methodologies in ELT. </p>
        </div>
        </div>
        {/* <div className="ece_hod">
          <Underline heading="HOD's Message"/>
        </div> */}
        <div className="ece_vision_mission">
          <Underline heading="Our Vision & Mission"/>
        <Deptvision visiondata={eng_vision.visiondata} />
        <Deptmission points={eng_mission}/>
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

export default Sh_English;
