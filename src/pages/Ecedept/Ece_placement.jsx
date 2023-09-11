import React from 'react'

import './Ece_placement.css'

import { Backtotop,Floatinmenu,Underline,Progressbar } from "../../widgets";
import { ece_dept_menu,ece_placement_info } from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_placement = () => {
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Placement Activities</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_placement_area">
                <Underline heading="Placement Details"/>
                <div className='ece_place_chart_holder'>
                    {ece_placement_info.map((object)=><>
                    <div className='ece_place_head'>{object.year}</div>
                    <div className='ece_place_hold'>
                        {object.details.map((item)=><Progressbar key={item.id} percent1={item.perc} heading={item.heading}/>)}
                    </div>
                    </>)}
                </div>
            </div>
    
            
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Ece_placement