import React from 'react'

import './Fees.css'

import { Content_card, Underline } from '../../widgets'

import { fee_pdfs } from '../../constants/fee_structure'

const Fees = () => {
  return (
    <div className='fee_content'>
        <div className='fee_head'><Underline heading="Fee Structure" /></div>
        <div className='fee_cards'>
            {fee_pdfs.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
        </div>
    </div>
  )
}

export default Fees