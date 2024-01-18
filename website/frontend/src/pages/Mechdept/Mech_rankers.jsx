import React,{useEffect} from 'react'

import './Mech_rankers.css'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { mech_dept_menu,mech_rankers} from "../../constants/mech_dept";

import { Radial_menu } from "../../components";


import { BsFillGearFill } from "react-icons/bs";

const Mech_rankers = () => {
    useEffect(() => {
        document.title = 'ACCET-MECH | Rankers';
      }, []);
        return (
            <div className="mechdept">
            <div className="mechbg">
              <div className="mechheading">
                Department of Mechanical Engineering
              </div>
              <div className="mech_sub_heading">Rankers</div>
            </div>
            <section className="mechdark">
              <div className="dept_float_menu">
                <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
              </div>
              <Radial_menu menu_links={mech_dept_menu} />
              <div className="mech_rankers_area">
                  <div className='mech_rankers'>
                      <Underline heading="Elite Rankers"/>
                      {mech_rankers.map((item)=>
                    <div className='mech_ranker_batch'>
                      <div className='mech_batch_head'>{item.head}</div>
                      <Profile_display list_info={item.rankers}/>
                    </div>
                      )}
                </div>
                  
              </div>
            </section>
      
            <Backtotop />
          </div>
        );
}
  
  export default Mech_rankers
