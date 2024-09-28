import React from 'react'

import { Table,Radial_menu } from '../../components'
import { English_dept_fmenu,eng_prog } from '../../constants/english_dept'
import { Backtotop,Floatinmenu } from '../../widgets';

import { RiEnglishInput } from "react-icons/ri";


const Sh_Eng_prog = () => {
    const columns = [
        { field: "sno", header: "sno" },
        { field: "title", header: "Title of the Course" },
        { field: "dur", header: "Duration" },
      ];


  return (
    <div>
    <section className="shengdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={RiEnglishInput} head="Menu" links={English_dept_fmenu} />
            </div>
            <Radial_menu menu_links={English_dept_fmenu} />
      <div className='sh_eng'>
      <Table data={eng_prog} columns={columns} />
      </div> 
      </section>
      <Backtotop/>
    </div>
  )
}

export default Sh_Eng_prog
