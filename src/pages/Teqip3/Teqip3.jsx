import React from 'react'

import "./Teqip3.css";

import { Floatinmenu } from '../../widgets'

import { teqip3_floater_menu } from '../../constants/teqip3-float';

import { teqip3 } from "../../constants/teqip3";

import { Table } from "../../components";


const Teqip3 = () => {
  const columns = [
    { field: "sno", header: "sno" },
    { field: "particulars", header: "particulars" },
    { field: "budget", header: "budget" },
  ];

  return (
    <div className='teqip3'>
      <div className="teqip3_heading">TEQIP-III</div>
      <div className="teqip3_content">
        <p>TEQIP –III is implemented for improving the quality of Engineering Education in existing institutions with a special consideration for Low Income States and Special Category States (SCS) and support to strengthen few affiliated technical universities to improve their policy, academic and management practices.</p>
      </div>
      <div className="teqip3_obj">PROJECT OBJECTIVES</div>

      <Floatinmenu head={teqip3_floater_menu.head} links={teqip3_floater_menu.links}/>
       
      <div className="teqip3_inner">
          <p>
            <li>Improving quality and equity in engineering institutions in focus states</li>
          </p>
          <p>
            <li>System-level initiatives to strengthen sector governance and performance which include widening the scope of Affiliating Technical Universities (ATUs) to improve their policy, academic and management practices towards affiliated institutions</li>
          </p>
          <p>
            <li>Twinning Arrangements to Build Capacity and Improve Performance of institutions and ATUs participating in focus states.</li>
          </p>
      </div>

      <div className='teqip3_tab'>
      <Table data={teqip3} columns={columns} />
      </div> 
      
    </div>
  )
}

export default Teqip3

/* <table className="teqip1_table">
        <tr>
          <th>S.NO</th>
          <th>PARTICULARS</th>
          <th>BUDGET</th>
        </tr>

        {teqip3.map((item) => (
          <tr>
            <td className="teqip3_first">{item.sno}</td>
            <td className="teqip3_second">{item.particulars}</td>
            <td className="teqip3_third">{item.budget}</td>
          </tr>
        ))}

        <tr>
          <td className="teqip3_first" colspan="2">Total Amount(Rs.)</td>
          <td className="teqip3_third">Rs. 7,00,00,000/-</td>
        </tr>

      </table> */