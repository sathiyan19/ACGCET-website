import React,{useEffect} from 'react'

import "./Phy_former_prof.css"

import { Backtotop,Floatinmenu,Underline } from '../../widgets'
import {Profile_display,Radial_menu} from '../../components'
import { GiPendulumSwing } from "react-icons/gi";

import { Physics_dept_fmenu,phy_former_prof } from '../../constants/physics_dept'

const Phy_former_prof = () => {
    useEffect(() => {
      document.title = 'ACCET-Physics |  Former Professors';
    }, []);
    return (
        <div className="Physicsdept">
        <div className="Physicsbg">
          <div className="Physicsheading">
            Department of Physics
          </div>
          <div className='Physics_sub_heading'>Former Professors</div>
       </div>
      <section className="shphydark">
            <div className="dept_float_menu">
              <Floatinmenu logo={GiPendulumSwing} head="Menu" links={Physics_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Physics_dept_fmenu} />
            <div className="shphy_fac_area">
                <div className='shphy_teach_fac'>
                    <Underline heading="Former Professors "/>
                    <Profile_display list_info={phy_former_prof}/>
                </div>
            </div>
          </section>
       <Backtotop/>
       </div>
    )
  }

export default Phy_former_prof