import React from 'react'

import './Aicte.css'

import { Content_card,Underline } from '../../widgets'

import {EOA_reports} from '../../constants/aicte'

const Aicte = () => {
  return (
    <div className='aicte_content'>
        {/* <div className='aicte_head'>AICTE Attachments</div> */}
        <Underline heading="AICTE Attachments"/>
        <div className='aicte_cards'>
            {EOA_reports.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
    </div>
  )
}

export default Aicte