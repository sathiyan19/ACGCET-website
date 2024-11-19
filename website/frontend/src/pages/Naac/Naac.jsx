import React,{useEffect} from 'react'

import "./Naac.css"
import { Radial_menu } from "../../components";
import { Content_card,Underline,Floatinmenu } from '../../widgets'
import { naac_data,naac_menu } from '../../constants/naac'
import { BsClipboardDataFill } from "react-icons/bs";
const Naac = () => {
    useEffect(() => {
      document.title = 'ACCET-NAAC';
    }, []);
    return (
      <div className='naac_content'>
        <div className='dept_float_menu'>
        <Floatinmenu logo={BsClipboardDataFill} head="Menu" links={naac_menu} />
        <Radial_menu menu_links={naac_menu}/>
        </div>
          {/* <div className='aicte_head'>AICTE Attachments</div> */}
          <Underline heading="NAAC"/>
          <div className='naac_cards'>
              {naac_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
          </div>
      </div>
    )
  }

export default Naac