import React,{useEffect} from 'react'

import "./Nba_sar.css"

import { Content_card,Underline,Floatinmenu, Backtotop } from '../../widgets'

import { nba_menu,nba_civ_sar,nba_mec_sar} from '../../constants/nba';
import {Radial_menu } from "../../components";
import { BsClipboardDataFill } from "react-icons/bs";


const Nbasar= () => {
  useEffect(() => {
    document.title = 'ACCET-NBA | NBA SAR';
  }, []);
  return (
    <div className='nba_doc'>
         <section className="nbamenu">
         <div className="nba_float_menu">
          <Floatinmenu
            logo={BsClipboardDataFill}
            head="Menu"
            links={nba_menu}
          />
        </div>
        <Radial_menu menu_links={nba_menu}/>

        <Underline heading="Self Assessment Report"/>
        <div className='nba_cards'>
            {nba_civ_sar.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
            {nba_mec_sar.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
        </section>
        <Backtotop/>
    </div>
  )
}

export default Nbasar;