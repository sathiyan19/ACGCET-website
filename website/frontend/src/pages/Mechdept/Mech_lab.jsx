import React,{useEffect} from 'react';

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";
import { 
  mech_dept_menu,
  mech_labs,
} from "../../constants/mech_dept";

import { Radial_menu } from "../../components";

import { BsFillGearFill } from "react-icons/bs";

const Mech_lab = () => {
  useEffect(()=> {
    document.title='ACCET-MECH | Laboratories';
  }, []);
    return (
        <div className="mechdept">
          <div className="mechbg">
            <div className="mechheading">
              Department of Mechanical Engineering
            </div>
            <div className="mech_sub_heading">Laboratories</div>
          </div>
          <section className="mechdark">
            <div className="dept_float_menu">
              <Floatinmenu logo={BsFillGearFill} head="Menu" links={mech_dept_menu} />
            </div>
            <Radial_menu menu_links={mech_dept_menu} />
            <div className="mech_lab_area">
                <div className='mech_acad_labs'>
                    <Underline heading="Department Labs"/>
                    <div className='lab_cards row'>
                        {mech_labs.map((item)=><Modal heading={item.heading} pic={item.pic} content_1={item.content_1} content_2={item.content_2} 
                        link={item.link}
                        sub_text={item["sub-head"]}/>)}
                    </div>
                </div>
            </div>
          </section>
    
          <Backtotop />
        </div>
      );
}

export default Mech_lab;