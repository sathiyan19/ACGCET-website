import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import {Sh_Phy_fac} from '../../containers'

const Physics_faculty = () => {
  useEffect(() => {
    document.title = 'ACCET-Physics | Faculties';
  }, []);
  return (
    <div className="Physicsdept">
      <div className="Physicsbg">
        <div className="Physicsheading">
          Department of Physics
        </div>
        <div className='Physics_sub_heading'>Faculties</div>
    </div>
    <Sh_Phy_fac/>
    <Backtotop/>
    </div>
  )
}

export default Physics_faculty
