import React from 'react'

import './Programs_offered.css'

import { Content_card,Backtotop,Underline } from '../../widgets'

import {ug_programs ,pg_programs, pt_programs} from '../../constants/prog_offered'

const Programs_offered = () => {
  return (
    <>
    <Backtotop/>
    <div className='prog_off'>
      {/* <div className="head">Programs Offered</div> */}
      <Underline heading="Programs Offered"/>

      <div className='progs'>
        <div className='prog_content'>The institution offers 5 U.G and 6 P.G Programs and 4 Part–time Programs.</div>

        <div className='ug_progs progs_flex'>
          <div className='prog_sub_head'>Under Graduate Programs</div>
          <div className='prog_cards'>
            {ug_programs.map((item)=><Content_card key={item.id} heading={item.program} intake={item.intake}/>)}
          </div>
        </div>


        <div className='pg_progs progs_flex'>
          <div className='prog_sub_head'>Post Graduate Programs</div>
          <div className='prog_cards'>
            {pg_programs.map((item)=><Content_card key={item.id} heading={item.program} intake={item.intake}/>)}
          </div>
        </div>

        <div className='pt_progs progs_flex'>
          <div className='prog_sub_head'>Part-time Graduate Programs</div>
          <div className='prog_cards'>
            {pt_programs.map((item)=><Content_card key={item.id} heading={item.program} intake={item.intake}/>)}
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Programs_offered