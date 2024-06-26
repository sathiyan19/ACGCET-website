import React from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
// import { ece_dept_menu,ece_fac_profiles,ece_sup_profiles} from "../../constants/ece_dept";
import { English_dept_fmenu,eng_fac_profiles } from '../../constants/english_dept';
import { Radial_menu } from "../../components";


import { RiEnglishInput } from "react-icons/ri";


const Sh_Eng_fac = () => {
  return (
    <div>
       <section className="shengdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={RiEnglishInput} head="Menu" links={English_dept_fmenu} />
            </div>
            <Radial_menu menu_links={English_dept_fmenu} />
            <div className="sheng_fac_area">
                <div className='sheng_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={eng_fac_profiles}/>
                </div>
                {/* <div className='sheng_teach_fac'>
                    <Underline heading="Suporting Faculties"/>
                    <Profile_display list_info={ece_sup_profiles}/>
                </div> */}
            </div>
          </section>
          <Backtotop/>
    </div>
  )
}

export default Sh_Eng_fac
