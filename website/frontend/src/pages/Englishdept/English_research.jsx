import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_Eng_research } from '../../containers';

const English_research = () => {
  useEffect(() => {
    document.title = 'ACCET-English | Research & Publications';
  }, []);
  return (
    <div className="Englishdept">
      <div className="Englishbg">
        <div className="Englishheading">
          Department of English
        </div>
        <div className='English_sub_heading'>Research and Publications</div>
    </div>
    <Sh_Eng_research/>
    <Backtotop/>
    </div>
  )
}

export default English_research
