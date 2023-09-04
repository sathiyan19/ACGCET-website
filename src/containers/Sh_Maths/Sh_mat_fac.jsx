import React from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'

import { Sh_dept_fmenu,mat_fac_profiles } from '../../constants/Sh_dept_menu';
import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";


const Sh_mat_fac = () => {
  return (
    <div>
      <section className="shmatdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={Sh_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Sh_dept_fmenu} />
            <div className="sheng_fac_area">
                <div className='sheng_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={mat_fac_profiles}/>
                </div>
                {/* <div className='shmat_teach_fac'>
                    <Underline heading="Suporting Faculties"/>
                    <Profile_display list_info={ece_sup_profiles}/>
                </div> */}
            </div>
          </section>
          <Backtotop/>
    </div>
  )
}

export default Sh_mat_fac
