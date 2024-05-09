import React from 'react'

import { Backtotop,Floatinmenu,Underline } from "../../widgets";

import { Radial_menu,Listformat } from "../../components";
import { Maths_dept_fmenu,mat_res_vas,mat_res_ani } from '../../constants/maths_dept';

import { VscSymbolOperator } from "react-icons/vsc";

const Sh_mat_research = () => {
  return (
    <div>
      <div>
       <section className="shmatdark">
        <div className="shmatdept_float_menu">
          <Floatinmenu logo={VscSymbolOperator} head="Menu" links={Maths_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Maths_dept_fmenu} />
        <div className="shmat_abt_area">
        <div className="shmat_abt">
        <Underline heading="Research and Publications"/>
        <div className='pts'>
            <h3>Dr.R. Vasanthi</h3>
            <Listformat points={mat_res_vas}/>
          </div>
          <div className='pts'>
            <h3>Dr.T. Anitha</h3>
            <Listformat points={mat_res_ani}/>
          </div>
        </div>
       
        
        </div>

        {/* {progressinfo.map((item)=><Progressbar bigperc={item.bigperc} smallperc={item.smallperc}/>)} */}
      </section>
      <Backtotop/>
    </div>
    </div>
  )
}

export default Sh_mat_research;
