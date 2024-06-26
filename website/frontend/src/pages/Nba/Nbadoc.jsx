import React,{useEffect} from 'react'

import "./Nbadoc.css"

import { Content_card,Underline,Floatinmenu,Backtotop  } from '../../widgets'

import { nba_menu,nba_doc} from '../../constants/nba';
import {Radial_menu } from "../../components";
import { BsClipboardDataFill } from "react-icons/bs";


const Nbadoc= () => {
  useEffect(() => {
    document.title = 'ACCET-NBA | NBA Documents';
  }, []);
  return (
    <div className='nba_doc'>
         <section className="nbamenu">
         <Radial_menu menu_links={nba_menu}/>
      <div className="nba_float_menu">
          <Floatinmenu
            logo={BsClipboardDataFill}
            head="Menu"
            links={nba_menu}
          />
        </div>
       

        <Underline heading="NBA Documents"/>
        <div className='nba_cards'>
            {nba_doc.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
        </section>
        <Backtotop />
    </div>
  )
}

export default Nbadoc;