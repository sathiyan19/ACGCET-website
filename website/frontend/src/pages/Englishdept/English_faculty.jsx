import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_Eng_fac } from '../../containers';

const English_faculty = () => {
  useEffect(() => {
    document.title = 'ACCET-English | Faculties';
  }, []);
  return (
    <div className="Englishdept">
      <div className="Englishbg">
        <div className="Englishheading">
          Department of English
        </div>
        <div className='English_sub_heading'>Faculty members</div>
    </div>
    <Sh_Eng_fac/>
    <Backtotop/>
    </div>
  )
}

export default English_faculty
