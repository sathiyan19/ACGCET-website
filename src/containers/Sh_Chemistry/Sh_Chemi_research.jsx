import React from 'react'

import { Radial_menu,Listformat } from '../../components'
import { Sh_dept_fmenu,chemi_research_R,chemi_research_l } from '../../constants/Sh_dept_menu'
import { Backtotop,Floatinmenu,Underline } from '../../widgets';

import { GrTest } from "react-icons/gr";

const Sh_Chemi_research = () => {
    
  return (
    <div>
      <div>
       <section className="shchemidark">
        <div className="shchemidept_float_menu">
          <Floatinmenu logo={GrTest} head="Menu" links={Sh_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Sh_dept_fmenu} />
        <div className="shchemi_abt_area">
        <div className="shchemi_abt">
        <Underline heading="Research and Publications"/>
        <div className='pts'>
            <h3>Loganathan K T</h3>
            <Listformat points={chemi_research_l}/>
          </div>
          <div className='pts'>
            <h3>Rajaperumal M</h3>
            <Listformat points={chemi_research_R}/>
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

export default Sh_Chemi_research
