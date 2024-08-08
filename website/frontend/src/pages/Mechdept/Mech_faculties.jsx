import React,{useEffect} from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { mech_dept_menu,mech_fac_profiles,mech_sup_profiles} from "../../constants/mech_dept";

import { Radial_menu } from "../../components";


import { BsFillGearFill } from "react-icons/bs";

const Mech_faculties = () => {
  useEffect(() => {
    document.title = 'ACCET-MECH | Faculties';
  }, []);
    return (
        <div className="mechdept">
          <div className="mechbg">
            <div className="mechheading">
              Department of Mechanical Engineering
            </div>
            <div className="mech_sub_heading">Faculty members</div>
          </div>
          <section className="mechdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
            </div>
            <Radial_menu menu_links={mech_dept_menu} />
            <div className="mech_fac_area">
                <div className='mech_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={mech_fac_profiles}/>
                </div>
                <div className='mech_teach_fac'>
                     <Underline heading="Supporting Faculties"/>
                    <Profile_display list_info={mech_sup_profiles}/> 
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
    }

export default Mech_faculties