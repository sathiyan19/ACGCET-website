import React from 'react'
import { Table ,Radial_menu } from "../../components";
import { Floatinmenu,Underline, Backtotop,Content_card } from "../../widgets";
import { naac,naac_menu } from "../../constants/naac";
import './Naac_best_practices.css'
function Naac_best_practices() {
   
  return (
    <div className='Naac_bestpractices'>
        <Underline heading="Best Practices" />
        <div className='nba_cards'>
            {naac.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
        
    </div>
  )
}

export default Naac_best_practices