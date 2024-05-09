import React from 'react'


import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'

import { Physics_dept_fmenu,phy_fac_profiles,phy_sup_profiles } from '../../constants/physics_dept';
import { Radial_menu } from "../../components";


import { GiPendulumSwing } from "react-icons/gi";


const Sh_Phy_fac = () => {
  return (
    <div>
      <section className="shphydark">
            <div className="dept_float_menu">
              <Floatinmenu logo={GiPendulumSwing} head="Menu" links={Physics_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Physics_dept_fmenu} />
            <div className="shphy_fac_area">
                <div className='shphy_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={phy_fac_profiles}/>
                </div>
                <div className='shphy_teach_fac'>
                    <Underline heading="Suporting Faculties"/>
                    <Profile_display list_info={phy_sup_profiles}/>
                </div>
            </div>
          </section>
          <Backtotop/>
    </div>
  )
}

export default Sh_Phy_fac
