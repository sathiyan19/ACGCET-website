import React from 'react'

import "./Nba.css";

import { Table } from "../../components";

import { nba } from "../../constants/nba";

import { Underline } from "../../widgets";


const Nba = () => {
    const columns = [
        { field: "sno", header: "sno" },
        { field: "name", header: "Name of Programme" },
        { field: "acc_stat", header: "Accreditation Status" },
        { field: "year", header: "Academic Year" },
        { field: "period", header: "Period" },
      ];
    
  return (
    <div className='nba'>

      <Underline heading="NBA" />
      
      <p>The institution is committed to continuous improvement in the quality of excellence through strong leadership. National Board of Accreditation (NBA) granted accreditation to the programmmes after critically evaluated and assured the quality of the programmes offered by  the institution.</p>

      <div className='nba_tab'>
      <Table data={nba} columns={columns} />
      </div>

    </div>
  )
}

export default Nba