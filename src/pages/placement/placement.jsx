import React, { useEffect } from 'react'

import "./Placement.css";
import { Backtotop,Floatinmenu,Underline,Deptvision,Deptmission } from "../../widgets";
import {Accordion,Hodmsg} from '../../components';
import { placement_menu } from "../../constants/placement";

import {Radial_menu } from "../../components";

import {FaComputer} from 'react-icons/fa6'

const cse="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/cse/csecover.webp"

const Placement = () => {
  useEffect(() => {
    document.title='ACCET-Placement';
  }, []);
  return(
    <div className='placement'>
      <div className='placementbg'>
        <div className='placementheading'>
          Placement Activity
        </div>
      </div>
      <section className='placementdark'>
        <div className='dept_float_menu'>
        <Floatinmenu logo={FaComputer} head="Menu" links={placement_menu} />
        </div>
        <Radial_menu menu_links={placement_menu}/>
        <div className='placement_abt'>
        <Underline heading="Placement Overview"/> 
        <div className='placementtwo-col'>
          <p className='placement_content'>
          Placement Cell is instrumental in facilitating students' transition from academics to successful careers. Through strategic collaboration with industry leaders, these cells secure internships and placements, offering valuable practical exposure. Dedicated teams provide guidance on resume building and interview skills, enhancing overall employability. These efforts across all departments ensure students are well-prepared for fulfilling professional journeys.
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={cse} />
          </div>
        </div>
        <div className='placementtwo-col1'>
          <p className='placement_content'>
          The Placement Cells across various departments play a pivotal role in shaping the professional trajectories of students. Established to bridge the gap between academia and industry, these cells actively forge connections with leading companies. By securing internships and placements, they empower students with practical experience, aligning academic knowledge with real-world challenges. These cells go beyond mere placement assistance; they serve as comprehensive career development hubs. Through workshops, seminars, and one-on-one counseling, dedicated teams guide students in refining their resumes and honing interview skills. The collaborative efforts of these Placement Cells ensure that graduates are not just academically adept but also possess the practical skills and confidence needed for a successful and fulfilling career in their respective fields.
          </p>
        </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};
export default Placement;