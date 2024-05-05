import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_Chemi_research from '../../containers/Sh_Chemistry/Sh_Chemi_research';

const Chemistry_research = () => {
  useEffect(() => {
    document.title = 'ACCET-Chemistry | Research & Publications';
  }, []);
  return (
    <div className="Chemistrydept">
      <div className="Chemistrybg">
        <div className="Chemistryheading">
          Department of Chemistry
        </div>
        <div className='Chemistry_sub_heading'>Research and Publications</div>
    </div>
    <Sh_Chemi_research/>
    <Backtotop/>
    </div>
  )
}

export default Chemistry_research
