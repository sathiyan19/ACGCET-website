import React from 'react'

import under from '../../assets/pictures/uct.webp'
import underm from '../../assets/pictures/uctmob.webp'


import { Backtotop } from "../../widgets";
import { Radial_menu } from "../../components";
import { Maths_dept_fmenu } from '../../constants/maths_dept';


const Sh_mat_lab = () => {
  return (
    <div>
      <section className="shmatcons">
      <div className='shmatbg'>
        <img className='uct_bg' src={under} alt='under_construction'/>
      </div>
      <div className='shmatbg'>
        <img className='uct_bg_mob' src={underm} alt='under_constructionp'/>
      </div>
        
        <Radial_menu menu_links={Maths_dept_fmenu} />
        
        </section>
        <Backtotop/>
    </div>
  )
}

export default Sh_mat_lab
