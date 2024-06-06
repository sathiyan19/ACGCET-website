import React,{useEffect} from 'react'

import "./Nba.css";

import { Table ,Radial_menu } from "../../components";

import { nba,nba_menu } from "../../constants/nba";

import { Floatinmenu,Underline } from "../../widgets";
import { BsClipboardDataFill } from "react-icons/bs";


const Nba = () => {
  useEffect(() => {
    document.title = 'ACCET-NBA';
  }, []);
    const columns = [
        { field: "sno", header: "sno" },
        { field: "name", header: "Name of Programme" },
        { field: "acc_stat", header: "Accreditation Status" },
        { field: "year", header: "Academic Year" },
        { field: "period", header: "Period" },
      ];
    
  return (
    <div className='nba'>
      <section className="nbamenu">
      <div className="nba_float_menu">
          <Floatinmenu
            logo={BsClipboardDataFill}
            head="Menu"
            links={nba_menu}
          />
        </div>
        <Radial_menu menu_links={nba_menu}/>
      <Underline heading="NBA" />
      

      <p>The institution is committed to continuous improvement in the quality of excellence through strong leadership. National Board of Accreditation (NBA) granted accreditation to the programmmes after critically evaluated and assured the quality of the programmes offered by  the institution.</p>

      <div className='nba_tab'>
      <Table data={nba} columns={columns} />
      </div>
      </section>
    </div>
  )
}

export default Nba