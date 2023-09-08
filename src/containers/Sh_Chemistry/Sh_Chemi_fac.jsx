import React from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
// import { ece_dept_menu,ece_fac_profiles,ece_sup_profiles} from "../../constants/ece_dept";
import { Sh_dept_fmenu,chemi_fac_profiles,chemi_sup_profiles } from '../../constants/Sh_dept_menu';
import { Radial_menu } from "../../components";


import { FaMicrochip } from "react-icons/fa6";


const Sh_Chemi_fac = () => {
  return (
    <div>
      <section className="shengdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={Sh_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Sh_dept_fmenu} />
            <div className="sheng_fac_area">
                <div className='sheng_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={chemi_fac_profiles}/>
                </div>
                <div className='sheng_teach_fac'>
                    <Underline heading="Suporting Faculties"/>
                    <Profile_display list_info={chemi_sup_profiles}/>
                </div>
            </div>
          </section>
          <Backtotop/>
    </div>
  )
}

export default Sh_Chemi_fac
