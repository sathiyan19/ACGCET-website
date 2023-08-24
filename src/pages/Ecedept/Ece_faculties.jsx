import React from 'react'

import "./Ecedept.css";
import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { ece_dept_menu,ece_fac_proflies,ece_sup_proflies} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";
// import cse from "../../assets/pictures/csecover.webp";

import { FaMicrochip } from "react-icons/fa6";

const Ece_faculties = () => {
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_fac_area">
                <div className='ece_teach_fac'>
                    <Underline heading="Teaching Faculties"/>
                    <Profile_display list_info={ece_fac_proflies}/>
                </div>
                <div className='ece_teach_fac'>
                    <Underline heading="Suporting Faculties"/>
                    <Profile_display list_info={ece_sup_proflies}/>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_faculties