import React from 'react'

import "./Iqac.css"

import { Floatinmenu,Underline,Deptvision,Deptmission } from '../../widgets'

import { Listformat,Table } from "../../components";

import { iqac,iqac_func,iqac_aim, iqac_strategy,iqac_floater_menu } from '../../constants/iqac';



const Iqac = () => {

  const columns = [
    { field: "sno",header:"sno"},
    { field: "rep",header:"Representations"},
    { field: "name",header:"Names"}
  ];

  return (
    <div className='iqac_whole'>

      <Underline heading="IQAC"/>
      
      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>

      <p>As per National Assessment and Accreditation Council (NAAC) guidelines every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. The IQAC is  part  of  the institution and work towards realization of the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent & catalytic improvement in the overall performance of the institution.</p>
      
      <Underline heading="Composition of the IQAC"/>

      <div className='iqac_tab'>
      <Table data={iqac} columns={columns} />
      </div>

      <Deptvision visionhead={iqac_aim.visionhead} visiondata={iqac_aim.visiondata} />
      <Deptmission head='Strategy' points={iqac_strategy}/>
      

      <Underline heading="Functions"/>
      <Listformat points={iqac_func}/>


    </div>
  )
}

export default Iqac