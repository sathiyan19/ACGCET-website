import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_Chemi_prog from '../../containers/Sh_Chemistry/Sh_Chemi_prog';

const Chemistry_Programme = () => {
  useEffect(() => {
    document.title = 'ACCET-Chemistry | Programme Organized';
  }, []);
  return (
    <div className="Chemistrydept">
      <div className="Chemistrybg">
        <div className="Chemistryheading">
          Department of Chemistry
        </div>
        <div className='Chemistry_sub_heading'>Programme Organized</div>
    </div>
    <Sh_Chemi_prog/>
    <Backtotop/>
    </div>
  )
}

export default Chemistry_Programme
