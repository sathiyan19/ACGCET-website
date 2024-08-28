import React,{useEffect} from 'react'
import "./Mech_phd.css";
import { Backtotop,Floatinmenu, Underline} from "../../widgets";

import { mech_dept_menu,mech_research_phd,mech_phd_facilities} from "../../constants/mech_dept";
import { Radial_menu,Table,Listformat } from "../../components";
import { BsFillGearFill } from "react-icons/bs";
const Mech_phd = () => {
    useEffect(() => {
        document.title = 'ACCET-Mech | Research And Publications';
      }, []);
      const columns=[
        {field:"sno",header:"s no"},
        {field:"scholar",header:"Name of the scholar"},
        {field:"supervisor",header:"Name of the Supervisor"},
        {field:"month and year",header:"Month&Year"}
      ];
  return (
    <div className="mechdept">
    <div className="mechbg">
      <div className="mechheading">
        Department of Mechanical Engineering
      </div>
      <div className="mech_sub_heading">Research And Publications</div>
    </div>
    <section className="mechdark">
      <div className="dept_float_menu">
        <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
      </div>
      <Radial_menu menu_links={mech_dept_menu} />
      <div className="mech_phd_area">
        
              <Underline heading="Research And Publications"/>
             <div className="Research cont">
                <p className="cont">
                The department firmly acknowledges the symbiotic relationship between research and teaching, considering research as a pivotal complement to elevate the quality of education. To bolster this commitment, the department consistently upgrades its research facilities, incorporating state-of-the-art equipment. Workshops and seminars are regular features, strategically organized for the enrichment of research scholars. 
                </p>
               <p className= "cont2"> 
               Since the academic year 2001-2002, the department has been recognized as a research center by Anna University, attesting to its dedication to advancing scholarly pursuits. Further exemplifying its commitment to cutting-edge research, the department secured a substantial grant of Rs 2 crore from the state government to establish the Smart Manufacturing Center of Excellence. This financial support underscores the department's pivotal role in fostering innovation and technological advancements in the realm of smart manufacturing.







                </p>
                <div className="research facilities">
                <Underline heading="Research Facilities in the Department"/>
                <Listformat points={mech_phd_facilities}/>
              





              
</div>
<Underline heading="Phd produced"/>
<div className="phdproduced">

    
    <Table data={mech_research_phd} columns={columns}/>
</div>
             </div>
          </div>
      
    </section>

    <Backtotop />
    </div>
  );
}

export default Mech_phd