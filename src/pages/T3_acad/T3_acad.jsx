import React from 'react'

import "./T3_acad.css";

import { Floatinmenu,Backtotop,Underline } from '../../widgets'

import { teqip3_floater_menu } from '../../constants/teqip3-float';

import { Table } from "../../components";

import { t3_acad } from '../../constants/teqip3';
import { t3_acad1 } from '../../constants/teqip3'
import { t3_acad2 } from '../../constants/teqip3';
import { t3_acad3 } from '../../constants/teqip3';

const T3_acad = () => {
  const columns = [
    { field: "sno",header:"S.No"},
    { field: "fac_name",header:"Name of the faculty"},
    { field: "prog_name",header:"Name of the Programme"},
    { field: "place",header:"Place"},
    { field: "from",header:"From"},
    { field: "to",header:"to"}
  ];

  const columns1 = [
    { field: "sno",header:"S.No"},
    { field: "name",header:"Name of the Staff"},
    { field: "desi",header:"designation"}
  ];
  return (
    <>
    <Backtotop/>
    <div className='acad_tot'>
    
    <div className="teqip3_heading"><Underline heading="TEQIP-III"/></div>


       <Floatinmenu head={teqip3_floater_menu.head} links={teqip3_floater_menu.links}/>
    
      <div className='acad_head'>Faculty Development Programme</div>
      <div className='acad_tab'>
      <Table data={t3_acad} columns={columns} />
      </div>

      <div  className='acad_text'>
      <div className='acad_head'>TEQIP III Training Staff</div>
      <div className='flex_col'>
        <h6>Name of the Programme:</h6><p>Personality and Computer Competency Development</p>
      </div>
      <div className='flex_col'>
        <h6>Place:</h6><p>Hotel Singaar International, Kanyakumari	</p>
      </div>
      <div className='flex_col'>
        <h6>Duration:</h6><p>14.09.2018 To 16.09.2018</p>
      </div>
      </div>

      
      <div className='acad_tab1'>
      <Table data={t3_acad1} columns={columns1} />
      </div>


      <div className='acad_text'>
      <div className='acad_head'>TEQIP III Training Staff</div>
      <div className='flex_col'>
        <h6>Name of the Programme:</h6><p>Capacity Building on Non Teaching staff on Personality Development,Computer Competency and<br></br>Work Life balance</p>
      </div>
      <div className='flex_col'>
        <h6>Place:</h6><p>Hotel Fortune JP Palace, Mysore</p>
      </div>
      <div className='flex_col'>
        <h6>Duration:</h6><p>29.09.2018 To 01.10.2018</p>
      </div>
      </div>

      <div className='acad_tab2'>
      <Table data={t3_acad2} columns={columns1} />
      </div>

      <div className='acad_text'>
      <div className='acad_head'>TEQIP III Training Staff</div>
      <div className='flex_col'>
        <h6>Name of the Programme:</h6><p>SDP on Integrated skills communication computer and stress management</p>
      </div>
      <div className='flex_col'>
        <h6>Place:</h6><p>GCT, Coimbatore</p>
      </div>
      <div className='flex_col'>
        <h6>Duration:</h6><p>29.07.2019 To 31.07.2019</p>
      </div>
      </div>


      <div className='acad_tab3'>
      <Table data={t3_acad3} columns={columns1} />
      </div>

      <div className='acad_text'>
      <div className='acad_head'>TEQIP III Training Staff</div>
      <div className='flex_col'>
        <h6>Name of the Staff:</h6><p>Mr.G.Peter Ramesh</p>
      </div>
      <div className='flex_col'>
        <h6>Designation</h6><p>Mechanic</p>
      </div>
      <div className='flex_col'>
        <h6>Name of the Programme:</h6><p>Two days workshop on Laboratory Practical  Skills Training in <br></br>Electrical Engineering</p>
      </div>
      <div className='flex_col'>
        <h6>Place:</h6><p>VIT, Vellore</p>
      </div>
      <div className='flex_col'>
        <h6>Duration:</h6><p>20.06.2019 to 21.06.2019</p>
      </div>
      </div>
    
    </div>
    </>
  )
}

export default T3_acad