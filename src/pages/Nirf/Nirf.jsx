import React,{useEffect} from 'react'

import "./Nirf.css"

import { Content_card,Underline } from '../../widgets'

import { nirf } from '../../constants/nirf-float';


const Nirf = () => {
  useEffect(() => {
    document.title = 'ACCET-NIRF';
  }, []);
  return (
    <div className='nirf_content'>
        {/* <div className='aicte_head'>AICTE Attachments</div> */}
        <Underline heading="NIRF"/>
        <div className='nirf_cards'>
            {nirf.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
    </div>
  )
}

export default Nirf