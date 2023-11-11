import React,{useEffect} from 'react'

import './Eee_research.css'
import { AiFillThunderbolt } from "react-icons/ai";

import {
    Backtotop,
    Floatinmenu,
    Underline,
  } from "../../widgets";
  import {
    eee_dept_menu,
    pub3,
  } from "../../constants/eee_dept";
  
  import { Radial_menu,Table,Listformat } from "../../components";

  import { eee_research_info,
scholar_info1,
scholar_info2,
scholar_info3,
scholar_info4,
scholar_info5,
pub1,
pub2,
pub4,
pub5 } from '../../constants/eee_dept';

const Eee_research = () => {
  useEffect(() => {
    document.title = 'ACCET-EEE | Research & Publications';
  }, []);
    const columns=[
        {field:"name", header:"Name of the faculty"},
        {field:"area", header:"Area of Interest"}
    ];
    const column1=[
        {field:'sno',header:"Sno"},
        {field:"guide",header:"Guide/Coguide"},
        {field:'area',header:"Area of Work"}
    ]

  return (
    <div className="eeedept">
    <div className="eeebg">
      <div className="eeeheading">
        Department of Electronics and Communication Engineering
      </div>
      <div className='eee_sub_heading'>Research and Publications</div>
    </div>
    <section className="eeedark">
      <div className="dept_float_menu">
        <Floatinmenu logo={AiFillThunderbolt} head="Menu" links={eee_dept_menu} />
      </div>
      <Radial_menu menu_links={eee_dept_menu} />
      <div className="eee_abt_area">
      <div className="eee_abt">
      <Underline heading="Research Activities"/>
      <div className="eeetwo-col1">
        <p className="eee_dept_content">
        The department's faculty members are deeply immersed in cutting-edge research activities, contributing to its vibrant academic environment. We boast a well-equipped department, featuring state-of-the-art research instruments that facilitate groundbreaking work. These resources include the Mircolab Box for real-time simulations, Smart Grid Emulators dedicated to Renewable Energy Integration and synchronization studies, and IoT-enabled operations for next-gen solutions. Additionally, our facilities cover relays coordination studies, GPU-based high-capacity computing machines tailored for autonomous vehicles, Virtual Instrumentation setups, and Advanced Drives platforms.

This robust infrastructure empowers our dedicated faculty members and enthusiastic students to delve into pioneering research across various frontiers.
 </p>
      </div>
      <div className="eeetwo-col1">
        <p className="eee_dept_content">
        Their tireless efforts have yielded numerous publications and patents, a testament to their innovative contributions. A substantial portion of our faculty members have earned recognition as Anna University-approved research supervisors, while the remainder are actively pursuing their doctoral studies.

The synergy between these accomplished educators and curious students creates a dynamic ecosystem where ideas flourish, solutions emerge, and the boundaries of knowledge continuously expand. This collaborative spirit is the driving force behind our department's commitment to pushing the boundaries of research and innovation in the field.
 </p>
        </div> 
      </div>
      <div className='res_head'><Underline heading="Areas of Interest of faculty"/></div>
        <div className='eee_res'>
        <div className='eee_res_table'>
      <Table data={eee_research_info} columns={columns} />
      </div>
      </div>
      {/* <div className='res_head'><Underline heading="Details of the Patent"/></div>
      <div className='eee_res'>
        <div className='eee_res_table'>
      <Table data={patent_info} columns={column1} />
      </div>
      </div> */}
      {/* <div className='res_head'><Underline heading="Research Guidance"/></div>
      <div className='eee_res'>
        <div className='eee_res_table'>
      <Table data={guide_info} columns={column2} />
      </div>
      </div> */}
      <div className='res_head'><Underline heading="Details of Research Scholars"/></div>
      <div className='eee_res'>
        <div className='eee_res_table'>
        <p className='eee_dept_content'>The major ongoing research activities in the department under the Guidance of our faculty  members  are listed below</p>
        <div className='res_head1'><h3><b className='eee_super'>Supervisor</b>: Dr. K.Baskaran</h3></div>
      <Table data={scholar_info1} columns={column1} />
      </div>
      </div>
      <div className='eee_res'>
        <div className='eee_res_table'>
        <div className='res_head1'><h3><b className='eee_super'>Supervisor</b>: Dr. A.Arunya Revathi</h3></div>
      <Table data={scholar_info2} columns={column1} />
      </div>
      </div>
      <div className='eee_res'>
        <div className='eee_res_table'>
        <div className='res_head1'><h3><b className='eee_super'>Supervisor</b>: Dr. M.Balasubramanian</h3></div>
      <Table data={scholar_info3} columns={column1} />
      </div>
      </div>
      <div className='eee_res'>
        <div className='eee_res_table'>
        <div className='res_head1'><h3><b className='eee_super'>Supervisor</b>: Dr. S.Nageswari</h3></div>
      <Table data={scholar_info4} columns={column1} />
      </div>
      </div>
      <div className='eee_res'>
        <div className='eee_res_table'>
        <div className='res_head1'><h3><b className='eee_super'>Supervisor</b>: Dr. S.Venkatesan</h3></div>
      <Table data={scholar_info5} columns={column1} />
      </div>
      </div>
      
      <div className='res_head'><Underline heading="Publications"/></div>
      <div className='eee_pts'>
            <h3>Journal Publications by Faculty: 2021</h3>
            <Listformat points={pub1}/>
          </div>
          <div className='eee_pts'>
            <h3>Journal Publications by Faculty: 2020</h3>
            <Listformat points={pub2}/>
          </div>
          <div className='eee_pts'>
            <h3>Journal Publications by Faculty: 2019</h3>
            <Listformat points={pub3}/>
          </div>
          <div className='eee_pts'>
            <h3>Journal Publications by Faculty: 2018</h3>
            <Listformat points={pub4}/>
          </div>
          <div className='eee_pts'>
            <h3>Journal Publications by Faculty: 2017</h3>
            <Listformat points={pub5}/>
          </div>
      </div>
    </section>

    <Backtotop />
  </div>
  )
}

export default Eee_research
