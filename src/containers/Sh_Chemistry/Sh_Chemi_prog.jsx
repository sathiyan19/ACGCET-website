import React from 'react'

import { Table,Radial_menu } from '../../components'
import { Sh_dept_fmenu,chemi_prog } from '../../constants/Sh_dept_menu'
import { Backtotop,Floatinmenu } from '../../widgets';

import { FaMicrochip } from "react-icons/fa6";

const Sh_Chemi_prog = () => {
    const columns = [
        { field: "sno", header: "sno" },
        { field: "name", header: "Name of the Programme Organized" },
        { field: "period", header: "Period of the Programme" },
        { field: "par", header: "Total No. of Participants" },
      ];


  return (
    <div>
      <div>
    <section className="shchemidark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={Sh_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Sh_dept_fmenu} />
      <div className='sh_chemi'>
      <Table data={chemi_prog} columns={columns} />
      </div> 
      </section>
      <Backtotop/>
    </div>
    </div>
  )
}

export default Sh_Chemi_prog
