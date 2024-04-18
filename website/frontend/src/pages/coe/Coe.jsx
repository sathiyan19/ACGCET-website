import React,{useEffect} from "react";
import "./Coe.css";
import{
  Backtotop,
  Floatinmenu,
  Underline,
  
}from"../../widgets";
import {Listformat, listformat}from"../../components";
import
{
  coe_menu,
  coe_facilities
}from"../../constants/coe";
import { Radial_menu } from "../../components";
import { FaEmpire } from "react-icons/fa6";



const Coe = () => {
  useEffect(()=>{
    document.title='Accet-COE';
  },[]);
  return (
<div className="coe_dept">
  <div className="coe_bg">
    <div className="coe_heading">Controller of Examination</div>
  </div>
  <section className="coe_dark">
    <div className="dept_float_menu">
      <Floatinmenu
      logo={FaEmpire}
      head="Menu"
      links={coe_menu}
      />

    </div>
    <Radial_menu menu_links={coe_menu} />
    <div className="coe_abt">
      <Underline heading ="About COE"/>
      <div className="coe_two-col">
        <p className="coe_dept_content">
      The Office of the Controller of Examinations is responsible in the conduct of scheduled examinations of Alagappa Chettiar Government college of Engineering and Technology (ACGCET), Karaikudi which is permanently affiliated to the Anna University, Chennai. 
        Examinations are conducted every year in the months of April/May and November/December for the students of ACGCET and the results of the examinations are published in the subsequent months.



        </p>
        
      </div>
      <div className="coe_two-col1">
      <p className="coe_dept_content">
      The COE ensures the smooth conduct of exams and timely declaration of results. Upholding academic standards, the COE implements measures to prevent malpractices and maintains transparent evaluation processes. Serving as a point of contact for students regarding examination-related queries, the COE provides support to ensure a fair and conducive examination environment. By promoting academic excellence through rigorous assessment practices, the COE plays a vital role in nurturing the intellectual growth and development of students, contributing to the overall success and reputation of ACGCET.







            </p>
      </div>
      <div className="exam_heading">
      <Underline heading ="Examination Automation"/>
      </div>
      <div className="examination">
       
        {/* <Underline heading ="Examination Automation"/> */}
       
        <p className="exam">
        The autonomous office is equipped with 10 Computers, 06 laser printers, High-End servers, High-End scanners, High-End printers, line printers, UPS (5 KVA) units, 2 AC machines, LCD projector, CCTV set up, and LAN set up. With these ICT and physical infrastructure facilities, the autonomous office has implemented a fully automated examination processes.


        </p>
        
      </div>
      <Underline heading=" Automation processes "/>
      <div className="process">
       
        
<Listformat points={coe_facilities}/>


      </div>
    </div>
  </section>
  <Backtotop/>
</div>
   
   
  );
};

export default Coe