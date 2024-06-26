import React from 'react'

import under from '../../assets/pictures/uct.webp'
import underm from '../../assets/pictures/uctmob.webp'


import { Backtotop } from "../../widgets";
import { Radial_menu } from "../../components";
import { English_dept_fmenu } from '../../constants/english_dept';


const Sh_Eng_research = () => {
  return (
    <div>
      <section className="shengcons">
      <div className='shengbg'>
        <img className='uct_bg' src={under} alt='under_construction'/>
      </div>
      <div className='shengbg'>
        <img className='uct_bg_mob' src={underm} alt='under_constructionp'/>
      </div>
        
        <Radial_menu menu_links={English_dept_fmenu} />
        
        </section>
        <Backtotop/>
    </div>
  )
}

export default Sh_Eng_research
