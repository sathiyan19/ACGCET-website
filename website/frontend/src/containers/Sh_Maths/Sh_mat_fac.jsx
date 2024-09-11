import React from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'

import { Maths_dept_fmenu,mat_fac_profiles } from '../../constants/maths_dept';
import { Radial_menu } from "../../components";

import { VscSymbolOperator } from "react-icons/vsc";


const Sh_mat_fac = () => {
  return (
    <div>
      <section className="shmatdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={VscSymbolOperator} head="Menu" links={Maths_dept_fmenu} />
            </div>
            <Radial_menu menu_links={Maths_dept_fmenu} />
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
