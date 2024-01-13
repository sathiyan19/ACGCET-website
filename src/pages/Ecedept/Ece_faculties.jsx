import React,{useEffect} from 'react'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { ece_dept_menu,ece_fac_profiles,ece_sup_profiles} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";


import { FaMicrochip } from "react-icons/fa6";

const Ece_faculties = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Faculties';
  }, []);
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Faculties</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_fac_area">
                <div className='ece_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={ece_fac_profiles}/>
                </div>
                <div className='ece_teach_fac'>
                    <Underline heading="Supporting Faculties"/>
                    <Profile_display list_info={ece_sup_profiles}/>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_faculties