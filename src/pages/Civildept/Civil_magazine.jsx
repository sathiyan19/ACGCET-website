import React from 'react'

import "./Civil_magazine.css";

import {
  Backtotop,
  Floatinmenu,
  Underline,
  Content_card
} from "../../widgets";

import {
  civ_dept_menu,
  mag_data
} from "../../constants/civil_dept";

import { Radial_menu } from "../../components";


import { BsFillBuildingsFill } from "react-icons/bs";


const Civil_magazine = () => {
    return (
        <div className="civdept">
          <div className="civbg">
            <div className="civheading">
              Department of Civil Engineering
            </div>
            <div className="civ_sub_heading">Magazines & Newsletters</div>
          </div>
          <section className="civdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillBuildingsFill} head="Menu" links={civ_dept_menu} />
            </div>
            <Radial_menu menu_links={civ_dept_menu} />
            <div className="civ_magaz_area">
    
             
            <Underline heading="Magazines & Newsletters"/>

            <div className='civil_magaz_cards'>
                {mag_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
           </div>
              
    ={}
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Civil_magazine