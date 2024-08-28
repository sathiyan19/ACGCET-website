import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_Chemi_lab} from '../../containers';

const Chemistry_lab_facility = () => {
  useEffect(() => {
    document.title = 'ACCET-Chemistry | Laboratories';
  }, []);
  return (
    <div className="Chemistrydept">
      <div className="Chemistrybg">
        <div className="Chemistryheading">
          Department of Chemistry
        </div>
        <div className='Chemistry_sub_heading'>Laboratories</div>
    </div>
    <Sh_Chemi_lab/>
    <Backtotop/>
    </div>
  )
}

export default Chemistry_lab_facility
