import React from 'react'

import './Scholarship.css'

import { Scholar_card,Underline } from '../../widgets'
import { Scholar_info } from '../../constants/Scholar_card'

const Scholarship = () => {
  return (
    <div>
    <div className='Schtitle'>
    <Underline heading="Scholarship Details"/>
    </div>
    <div className='Scholar-cards'>
      {Scholar_info.map((scholar) => (
          <Scholar_card
            key={scholar.id}
            schbg={scholar.schbg}
            IncLimit={scholar.IncLimit}
            schamt={scholar.schamt}
            schterms1={scholar.schterms1}
            schterms2={scholar.schterms2}
            schterms3={scholar.schterms3}
          />
        ))}
    </div>
    </div>
  )
}

export default Scholarship
