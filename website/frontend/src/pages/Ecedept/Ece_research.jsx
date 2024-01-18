import React,{useEffect} from 'react'

import './Ece_research.css'

import { Radial_menu,Table,Listformat } from "../../components";
import { Backtotop,Floatinmenu,Underline } from "../../widgets";

import { ece_dept_menu,ece_research_info, patent_info,guide_info, scholar_info1,scholar_info2,scholar_info3,scholar_info4,ece_siva,ece_margaret, ece_rajesh } from "../../constants/ece_dept";

import { FaMicrochip } from "react-icons/fa6";

const Ece_research = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Research & Publications';
  }, []);
    const columns=[
        {field:"name", header:"Name of the faculty"},
        {field:"area", header:"Area of Interest"}
    ];
    const column1=[
        {field:"name", header:"Name of the faculty"},
        {field:"title", header:"Area of Interest"},
        {field:"App", header:"Application Number"},
        {field:"status",header:"Status"}
    ];
    const column2=[
        {field:'sno',header:"Sno"},
        {field:'name',header:"Name of the Mentor"},
        {field:'npprod',header:"No.of Ph.D Scholars Produced"},
        {field:'nppur',header:"No.of Ph.D Scholars Pursuing"},
        {field:'msres',header:"No.of M.S(Research) scholars Produced"}
    ];
    const column3=[
        {field:'sno',header:"Sno"},
        {field:'name',header:"Name of the Scholar"},
        {field:'area',header:"Area of work"},
    ];



  return (
    <div className="ecedept">
    <div className="ecebg">
      <div className="eceheading">
      Department of Electrical and Electronics Engineering
      </div>
      <div className='ece_sub_heading'>Research and Publications</div>
    </div>
    <section className="ecedark">
      <div className="dept_float_menu">
        <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
      </div>
      <Radial_menu menu_links={ece_dept_menu} />
      <div className="ece_abt_area">
      <div className="ece_abt">
      <Underline heading="Research Activities"/>
      <div className="ecetwo-col1">
        <p className="ece_dept_content">
        The Department of Electronics & Communication Engineering at our institution is a thriving hub of research and innovation, where dedicated faculty members collaborate closely with enthusiastic students to explore and contribute to the ever-evolving field of Communication Engineering. This dynamic synergy has resulted in a plethora of significant research publications, highlighting our commitment to academic excellence and cutting-edge discoveries.
        One notable achievement in our journey is the application for a patent in the field of Optical Communication, a testament to our pioneering work in this domain. This patent application signifies our dedication to pushing the boundaries of knowledge and technology, with the aim of advancing the field for the betterment of society.
        </p>
      </div>
      <div className="ecetwo-col1">
        <p className="ece_dept_content">
        To support our research endeavors, the department boasts state-of-the-art facilities and sophisticated equipment, particularly in the areas of Microwave and Optical Communication. These resources provide a fertile ground for experimentation and exploration, enabling our students and faculty to delve deep into intricate research projects.
        Furthermore, the Department of Communication Engineering has earned recognition as a research center by the prestigious Anna University, Chennai. This recognition underscores our institution's commitment to fostering a culture of research and innovation, where students and faculty alike are empowered to contribute meaningfully to the field while pursuing their academic and scientific passions.
        </p>
        </div> 
      </div>
      <div className='res_head'><Underline heading="Areas of Interest of faculty"/></div>
        <div className='ece_res'>
        <div className='ece_res_table'>
      <Table data={ece_research_info} columns={columns} />
      </div>
      </div>
      <div className='res_head'><Underline heading="Details of the Patent"/></div>
      <div className='ece_res'>
        <div className='ece_res_table'>
      <Table data={patent_info} columns={column1} />
      </div>
      </div>
      <div className='res_head'><Underline heading="Research Guidance"/></div>
      <div className='ece_res'>
        <div className='ece_res_table'>
      <Table data={guide_info} columns={column2} />
      </div>
      </div>
      <div className='res_head'><Underline heading="Details of Research Scholars"/></div>
      <div className='ece_res'>
        <div className='ece_res_table'>
        <p className='ece_dept_content'>The major ongoing research activities in the department under the Guidance of our faculty  members are:</p>
        <div className='res_head1'><h3><b className='ece_super'>Supervisor</b>: Dr. A.Sivanantha Raja</h3></div>
      <Table data={scholar_info1} columns={column3} />
      </div>
      </div>
      <div className='ece_res'>
        <div className='ece_res_table'>
        <div className='res_head1'><h3><b className='ece_super'>Supervisor</b>: Dr. G.Karpagarajesh</h3></div>
      <Table data={scholar_info2} columns={column3} />
      </div>
      </div>
      {/* <div className='ece_res'>
        <div className='ece_res_table'>
        <div className='res_head1'><h3><b className='ece_super'>Supervisor</b>: Dr. S.Somasundaram</h3></div>
      <Table data={scholar_info3} columns={column3} />
      </div>
      </div> */}
      <div className='ece_res'>
        <div className='ece_res_table'>
        <div className='res_head1'><h3><b className='ece_super'>Supervisor</b>: Dr. B.Rajeshkanna</h3></div>
      <Table data={scholar_info4} columns={column3} />
      </div>
      </div>
      
      <div className='res_head'><Underline heading="Book and Book Chapters"/></div>
      <div className='ece_pts'>
            <h3>Dr. A.Sivanantha Raja</h3>
            <Listformat points={ece_siva}/>
          </div>
          <div className='ece_pts'>
            <h3>Dr. D.Helena Margaret</h3>
            <Listformat points={ece_margaret}/>
          </div>
          <div className='ece_pts'>
            <h3>Dr. B.Rajeshkanna</h3>
            <Listformat points={ece_rajesh}/>
          </div>

      </div>

      {/* {progressinfo.map((item)=><Progressbar bigperc={item.bigperc} smallperc={item.smallperc}/>)} */}
    </section>

    <Backtotop />
  </div>
  )
}

export default Ece_research
