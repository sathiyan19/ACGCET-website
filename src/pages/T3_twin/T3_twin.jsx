import React from 'react'

import "./T3_twin.css";

import { Floatinmenu,Backtotop } from '../../widgets'

import { teqip3_floater_menu } from '../../constants/teqip3-float';

import { Table } from "../../components";

import { t3_twin } from '../../constants/teqip3';

const T3_twin = () => {
  const columns = [
    { field: "sno",header:"S.No"},
    { field: "name",header:"Name of the Programme"},
    { field: "res",header:"Resource Person"},
    { field: "date",header:"Date"},
    { field: "place",header:"Place"},
    { field: "bene",header:"Beneficiary"}
  ];
  return (
    <>
    <Backtotop/>
  <div className='twin'>
    <div className='twin_head1'>Twinning Activities</div>
    <Floatinmenu head={teqip3_floater_menu.head} links={teqip3_floater_menu.links}/>
    <div className='twin_p'>
    Institutions already participated in TEQIP-I and TEQIP –II will be selected for Twinning Arrangements to Build Capacity and Improve Performance of Participating Institutions.
    </div>

    <div className='twin_head'>Mentee Institute:</div>

    <div className='twin_p'>
    University College of Engineering and Technology (UCET), Vinoba Bhave University, Hazaribagh, Jharkhand.
    </div>

    <div className='twin_tab_inner'>Programmes conducted for the benefit of Mentee Institute</div>
    
    <div className='twin_tab'>
    <Table data={t3_twin} columns={columns} />
    </div>
</div>
</>
  )
}

export default T3_twin