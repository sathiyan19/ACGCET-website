import React,{useEffect} from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { civ_dept_menu,civ_fac_profiles,civ_sup_profiles} from "../../constants/civil_dept";

import { Radial_menu } from "../../components";


import { BsFillBuildingsFill } from "react-icons/bs";

const Civil_faculties = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Faculties';
  }, []);
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Faculties</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />
            <div className="civ_fac_area">
                <div className='civ_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={civ_fac_profiles}/>
                </div>
                <div className='civ_teach_fac'>
                    <Underline heading="Supporting Faculties"/>
                    <Profile_display list_info={civ_sup_profiles}/>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_faculties