import React,{useEffect} from "react";

import "./Csedept.css";
import { Backtotop,Floatinmenu,Underline } from "../../widgets";
import {Profile_display,Radial_menu} from '../../components'
import { cse_dept_menu,cse_fac_profiles,cse_sup_profiles } from "../../constants/cse_dept";

import {FaComputer} from 'react-icons/fa6'

const Cse_faculties = () => {
  useEffect(() => {
    document.title = 'ACCET-CSE | Faculties';
  }, []);
    return (
        <div className="csedept">
          <div className="csebg">
            <div className="cseheading">
              Department of Computer Science and Engineering
            </div>
            <div className="cse_sub_heading">Faculties</div>
          </div>
          <section className="csedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaComputer} head="Menu" links={cse_dept_menu} />
            </div>
            <Radial_menu menu_links={cse_dept_menu}/>
            <div className="cse_fac_area">
                <div className='cse_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={cse_fac_profiles}/>
                </div>
                <div className='cse_teach_fac'>
                    <Underline heading="Supporting Faculties"/>
                    <Profile_display list_info={cse_sup_profiles}/>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Cse_faculties