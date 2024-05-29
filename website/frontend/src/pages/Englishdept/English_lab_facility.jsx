import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import {  Sh_Eng_lab } from '../../containers';

const English_lab_facility = () => {
  useEffect(() => {
    document.title = 'ACCET-English | Laboratories';
  }, []);
  return (
    <div className="Englishdept">
      <div className="Englishbg">
        <div className="Englishheading">
          Department of English
        </div>
        <div className='English_sub_heading'>Laboratories</div>
    </div>
    <Sh_Eng_lab/>
    <Backtotop/>
    </div>
  )
}

export default English_lab_facility
