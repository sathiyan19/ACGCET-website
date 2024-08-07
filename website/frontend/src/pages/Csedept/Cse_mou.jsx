import React,{useEffect} from 'react'

import './Cse_mou.css'

import {
  Backtotop,
  Floatinmenu,
  Content_card
} from "../../widgets";

import {
  cse_dept_menu,
  cse_mou_data,
  cse_mou_contend_card,
} from "../../constants/cse_dept";

import {FaComputer} from 'react-icons/fa6'


import { Radial_menu,Table } from "../../components";


const Cse_mou = () => {
  useEffect(() => {
    document.title = 'ACCET-CSE | MoUs';
  }, []);

  const columns = [
    { field: "sno",header:"sno"},
    { field: "comp_name",header:"COMPANY NAME (INSTITUTION NAME)"},
    { field: "sign_date",header:"DATE OF SIGNING"},
    { field: "valid",header:"VALID PERIOD"},
    { field: "end_date",header:"DATE OF ENDING"}
  ];

  return (
    <div className="csedept">
      <div className="csebg">
        <div className="cseheading">
        Department of Computer Science and Engineering
        </div>
        <div className="cse_sub_heading">Memorandum Of Understanding</div>
      </div>
      <section className="csedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
        </div>
        <Radial_menu menu_links={cse_dept_menu} />
      
      <div className='cse_mou_tab'>
      <Table data={cse_mou_data} columns={columns} />
      </div>

      <div className="cse_mou_content_card">
        {cse_mou_contend_card.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}

      </div>


      </section>

      <Backtotop />
    </div>
  );
}

export default Cse_mou