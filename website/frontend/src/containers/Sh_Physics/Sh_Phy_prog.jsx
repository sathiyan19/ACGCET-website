import React from 'react'

import { Table,Radial_menu } from '../../components'
import { Physics_dept_fmenu,phy_prog } from '../../constants/physics_dept'
import { Backtotop,Floatinmenu } from '../../widgets';

import { GiPendulumSwing } from "react-icons/gi";


const Sh_Phy_prog = () => {
    const columns = [
        { field: "sno", header: "sno" },
        { field: "title", header: "Title of the Course" },
        { field: "name", header: "Name of the Institution" },
        { field: "dur", header: "Duration" },
      ];


  return (
    <div>
    <section className="shphydark">
            <div className="dept_float_menu">
              <Floatinmenu logo={GiPendulumSwing} head="Menu" links={Physics_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Physics_dept_fmenu} />
      <div className='sh_phy'>
      <Table data={phy_prog} columns={columns} />
      </div> 
      </section>
      <Backtotop/>
    </div>
  )
}

export default Sh_Phy_prog
