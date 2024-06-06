import React,{useEffect} from 'react'
import './Civil_research.css'

import { Floatinmenu,Underline,Content_card } from '../../widgets';
import { Radial_menu,Table } from '../../components';
import { civ_dept_menu,
  civ_research_info,
  scholar_info1,
  scholar_info2,
  scholar_info3, 
  scholar_info4,
scholar_info5, civ_publish_data} from '../../constants/civil_dept';

import { BsFillBuildingsFill } from "react-icons/bs";


const Civil_research = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Research & Publications';
  }, []);
  const column1=[
    {field:"sno",header:"Sno"},
    {field:"name",header:"Name of the Scholar"},
    {field:"yr",header:"Month and Year of registration of the scholar"},
    {field:"title",header:"PhD Scholar's Title of the Thesis"},
    {field:"status",header:"Status"}
  ];
  const column=[
    {field:"sno",header:"Sno"},
    {field:"author",header:"Author Details"},
    {field:"title",header:"Title of the Paper"},
    {field:"name",header:"Name of the Journal"},
    {field:"yr",header:'Month and Year'},
    {field:"vol",header:"Vol, issue number"},
    {field:"fac",header:"Impact Factor"},
    {field:"Doi",header:"DOI Number(if available)/link"}
  ]


  return (
    <div>
      <div className="civdept">
      <div className="civbg">
        <div className="civheading">Department of Civil Engineering</div>
      <div className="civ_sub_heading">Research and Publications
      </div>
      </div>
      <section className="civdark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={BsFillBuildingsFill}
            head="Menu"
            links={civ_dept_menu}
          />
        </div>
        <Radial_menu menu_links={civ_dept_menu} />
        <div className="civ_abt">
         <Underline heading="Research and Publications"/>
        <div className="civtwo-col1">
       
            <p className="civ_dept_content">
            The department continuously enhances its research facilities with the augmentation of sophisticated equipments. The department  organizing workshops and seminars  for the benefit of research scholars.  The department is Anna University recognized research centre from the academic year 2001-2002.
            </p>
          </div>
          </div>
          <div className='res_head'><Underline heading="Details of Research Scholars"/></div>
      <div className='civil_res'>
        <div className='civil_res_table'>
        <div className='res_head1'><h3><b className='civil_super'>Supervisor</b>:Dr. SR.SUMATHY</h3></div>
        <div className='res_head2'><p><b className='civil_super'>Guideship approval number</b>: 311008</p></div>
        <div className='res_head2'><p><b className='civil_super'>Year of recognition</b>: 2018</p></div>
      <Table data={scholar_info1} columns={column1} />
      </div>
      </div>
      <div className='civil_res'>
        <div className='civil_res_table'>
        <div className='res_head1'><h3><b className='civil_super'>Supervisor</b>:Dr. C. VIJAYAPRABHA</h3></div>
        <div className='res_head2'><p><b className='civil_super'>Guideship approval number</b>: 3010017</p></div>
        <div className='res_head2'><p><b className='civil_super'>Year of recognition</b>: 2018</p></div>
      <Table data={scholar_info2} columns={column1} />
      </div>
      </div>
      <div className='civil_res'>
        <div className='civil_res_table'>
        <div className='res_head1'><h3><b className='civil_super'>Supervisor</b>:Dr.R.PRAKASH</h3></div>
        <div className='res_head2'><p><b className='civil_super'>Guideship approval number</b>: 3810003</p></div>
        <div className='res_head2'><p><b className='civil_super'>Year of recognition</b>: 2021</p></div>
      <Table data={scholar_info3} columns={column1} />
      </div>
      </div>
      <div className='civil_res'>
        <div className='civil_res_table'>
        <div className='res_head1'><h3><b className='civil_super'>Supervisor</b>:Dr S MARIRAJMOHAN</h3></div>
        <div className='res_head2'><p><b className='civil_super'>Guideship approval number</b>: 2410064</p></div>
        <div className='res_head2'><p><b className='civil_super'>Year of recognition</b>: 2015</p></div>
      <Table data={scholar_info4} columns={column1} />
      </div>
      </div>
      <div className='civil_res'>
        <div className='civil_res_table'>
        <div className='res_head1'><h3><b className='civil_super'>Supervisor</b>:Dr K AARTHI</h3></div>
        <div className='res_head2'><p><b className='civil_super'>Guideship approval number</b>: 3310005</p></div>
        <div className='res_head2'><p><b className='civil_super'>Year of recognition</b>: 2019</p></div>
      <Table data={scholar_info5} columns={column1} />
      </div>
      </div>

      <div className='res_head'>
      <Underline heading="Publications"/></div>
        <div className='civil_res'>
        <div className='civil_res_table'>
      <Table data={civ_research_info} columns={column} />
      </div>
      </div>
      <div className="civ_magaz_area">
    
             
        {/* <Underline heading="Magazines & Newsletters"/> */}

        <div className='civil_magaz_cards'>
            {civ_publish_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
              
    
      </div>
        </section>
        </div>
    </div>
  )
}

export default Civil_research
