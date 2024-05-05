import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_Eng_prog from '../../containers/Sh_English/Sh_Eng_prog';

const English_Programme = () => {
  useEffect(() => {
    document.title = 'ACCET-English | Programme Organized';
  }, []);
  return (
    <div className="Englishdept">
      <div className="Englishbg">
        <div className="Englishheading">
          Department of English
        </div>
        <div className='English_sub_heading'>Programme Organized</div>
    </div>
    <Sh_Eng_prog/>
    <Backtotop/>
    </div>
  )
}

export default English_Programme
