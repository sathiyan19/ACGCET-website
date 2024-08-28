import React,{useEffect} from 'react'

import "./Govern.css";

import govern from "../../assets/pictures/govern.webp"

import { Table } from "../../components";

import { govern_data } from "../../constants/govern";
import { Underline } from '../../widgets';

const Govern = () => {
  useEffect(() => {
    document.title = 'ACCET-Governing Council';
  }, []);
  const columns = [
    { field: "sno", header: "s.no" },
    { field: "name", header: "name of the members" },
    { field: "desi", header: "designation" },
    // { field: "tenure", header: "tenure" }
  ];
  return (
    <div>
        <div className="governing_council">
      {/* <h1>Governing Council</h1> */}
      <Underline heading="Governing Council"/>
    </div>

    <div className="governing_title">
      <h5>The Governing Body constituted under the UGC guidelines channelizes the institution activities to achieve its quality mandate.</h5>
    </div>

    <div className="governing_headingsec">
      <div className="governing_imghead">
         <img className="governing_pic" src={govern} alt="governing_council" /> 
      </div>

      <div className="governing_content">
        <ul>
          <li>Guide the college while fulfilling the objectives for which the college has been granted autonomous status.</li>
          <li>Institute scholarships, fellowships, studentships, medals, prizes and certificates on the recommendations of the Academic Council Approve new programmes of study leading to degrees and/or diplomas.</li>
          <li>All recruitments of Teaching Faculty/Principal shall be made by the Governing Body/state government as applicable in accordance with the policies laid down by the UGC and State Government from time to time. To approve annual budget of the college before submitting the same at the UGC.</li>
          <li>Perform such other functions and institute committees, as may be necessary and deemed fit for the proper development of the college.</li>
        </ul>
      </div>
    </div>

    <div className="governing_tab">
    <Table  data={govern_data}  columns={columns}/>
    </div>
  </div>
  )
}

export default Govern