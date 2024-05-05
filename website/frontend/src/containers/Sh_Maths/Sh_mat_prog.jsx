import React from 'react'

import { Table,Radial_menu } from '../../components'
import { Maths_dept_fmenu,mat_prog } from '../../constants/maths_dept'
import { Backtotop,Floatinmenu,Underline } from '../../widgets';

import { VscSymbolOperator } from "react-icons/vsc";


const Sh_mat_prog = () => {
    const columns = [
        { field: "sno", header: "sno" },
        { field: "title", header: "Title of the Course" },
        { field: "name", header: "Name of the Institution" },
        { field: "dur", header: "Duration" },
      ];


  return (
    <div>
    <section className="shmatdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={VscSymbolOperator} head="Menu" links={Maths_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Maths_dept_fmenu} />
      <div className='sh_mat'>
      <Underline heading="Programme Organized"/>
      <Table data={mat_prog} columns={columns} />
      </div> 
      </section>
      <Backtotop/>
    </div>
  )
}

export default Sh_mat_prog
