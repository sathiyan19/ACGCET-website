import React,{useEffect} from 'react'

import "./Naac.css"

import { Content_card,Underline } from '../../widgets'
import { naac_data } from '../../constants/naac'

const Naac = () => {
    useEffect(() => {
      document.title = 'ACCET-NAAC';
    }, []);
    return (
      <div className='naac_content'>
          {/* <div className='aicte_head'>AICTE Attachments</div> */}
          <Underline heading="NAAC"/>
          <div className='naac_cards'>
              {naac_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
          </div>
      </div>
    )
  }

export default Naac