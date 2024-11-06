import React,{useEffect} from 'react'

import './Ece_alumni_notable.css'

import { Backtotop,Floatinmenu, Underline} from "../../widgets";
import {Profile_display} from '../../components'
import { ece_dept_menu,ece_notablealumni} from "../../constants/ece_dept";

import { Radial_menu } from "../../components";
// import cse from "../../assets/pictures/csecover.webp";

import { FaMicrochip } from "react-icons/fa6";

const Ece_alumni_notable = () => {
  useEffect(() => {
    document.title = 'ACCET-ECE | Alumni';
  }, []);
    return (
        <div className="ecedept">
          <div className="ecebg">
            <div className="eceheading">
              Department of Electronics and Communication Engineering
            </div>
            <div className="ece_sub_heading">Alumni</div>
          </div>
          <section className="ecedark">
            <div className="dept_float_menu">
              <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
            </div>
            <Radial_menu menu_links={ece_dept_menu} />
            <div className="ece_rankers_area">
                <div className='ece_rankers'>
                    <Underline heading="Alumni"/>
                    {ece_notablealumni.map((item)=>
                    <div className='ece_ranker_batch'>
                      <div className='ece_batch_head'>{item.head}</div>
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

export default Ece_alumni_notable