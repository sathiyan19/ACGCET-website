import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_Chemi_fac } from '../../containers';

const Chemistry_faculty = () => {
  useEffect(() => {
    document.title = 'ACCET-Chemistry | Faculties';
  }, []);
  return (
    <div className="Chemistrydept">
      <div className="Chemistrybg">
        <div className="Chemistryheading">
          Department of Chemistry
        </div>
        <div className='Chemistry_sub_heading'>Faculties</div>
    </div>
    <Sh_Chemi_fac/>
    <Backtotop/>
    </div>
  )
}

export default Chemistry_faculty
