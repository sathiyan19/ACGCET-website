import React from 'react'
import { Table ,Radial_menu } from "../../components";
import { Floatinmenu,Underline, Backtotop,Content_card ,Opening} from "../../widgets";
import { naac,naac_menu,naac_best } from "../../constants/naac";
import './Naac_best_practices.css'
import { BsClipboardDataFill } from "react-icons/bs";
function Naac_best_practices() {
   
  return (
    <div className='Naac_bestpractices'>
      <div className='dept_float_menu'>
              <Floatinmenu logo={BsClipboardDataFill} head="Menu" links={naac_menu} />
              <Radial_menu menu_links={naac_menu}/>
              </div>
        <Underline heading="Best Practices 23-24" />
        <div className='nba_cards'>
            {naac.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
       
    </div>
  )
}

export default Naac_best_practices