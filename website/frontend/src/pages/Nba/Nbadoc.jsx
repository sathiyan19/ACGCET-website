import React,{useEffect} from 'react'

import "./Nbadoc.css"

import { Content_card,Underline,Floatinmenu } from '../../widgets'

import { nba_menu,nba_doc} from '../../constants/nba';
import {Radial_menu } from "../../components";


const Nbadoc= () => {
  useEffect(() => {
    document.title = 'ACCET-NBA | NBA Documents';
  }, []);
  return (
    <div className='nba_doc'>
         <section className="nbamenu">
      <div className="nba_float_menu">
          <Floatinmenu  head="Menu" links={nba_menu} />
        </div>
        <Radial_menu menu_links={nba_menu}/>

        <Underline heading="NBA Documents"/>
        <div className='nba_cards'>
            {nba_doc.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
        </section>
    </div>
  )
}

export default Nbadoc;