import React from 'react'

import { Radial_menu,Listformat } from '../../components'
import { Sh_dept_fmenu,Phy_research_C,Phy_research_M,Phy_research_P,Phy_research_S,Phy_research_V,Phy_research_Vj,Phy_research_B } from '../../constants/Sh_dept_menu'
import { Backtotop,Floatinmenu,Underline } from '../../widgets';

import { GiPendulumSwing } from "react-icons/gi";


const Sh_Phy_research = () => {
  return (
    <div>
      <div>
       <section className="shchemidark">
        <div className="shchemidept_float_menu">
          <Floatinmenu logo={GiPendulumSwing} head="Menu" links={Sh_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Sh_dept_fmenu} />
        <div className="shchemi_abt_area">
        <div className="shchemi_abt">
        <Underline heading="Research and Publications"/>
        <div className='pts'>
            <h3>Dr.Bhuvaneshwari B V</h3>
            <Listformat points={Phy_research_B}/>
          </div>
          <div className='pts'>
            <h3>Dr.Ponmudi S</h3>
            <Listformat points={Phy_research_P}/>
          </div>
          <div className='pts'>
            <h3>Venkatrajan S</h3>
            <Listformat points={Phy_research_V}/>
          </div>
          <div className='pts'>
            <h3>Cynthia S R</h3>
            <Listformat points={Phy_research_C}/>
          </div>
          <div className='pts'>
            <h3>Sivaganesh G</h3>
            <Listformat points={Phy_research_S}/>
          </div>
          <div className='pts'>
            <h3>Dr.Vijayaraghavan K R</h3>
            <Listformat points={Phy_research_Vj}/>
          </div>
          <div className='pts'>
            <h3>Dr.Mariammal R N</h3>
            <Listformat points={Phy_research_M}/>
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

export default Sh_Phy_research
