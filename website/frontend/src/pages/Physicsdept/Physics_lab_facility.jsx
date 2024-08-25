import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_Phy_lab } from '../../containers';

const Physics_lab_facility = () => {
  useEffect(() => {
    document.title = 'ACCET-Physics | Laboratories';
  }, []);
  return (
    <div className="Physicsdept">
      <div className="Physicsbg">
        <div className="Physicsheading">
          Department of Physics
        </div>
        <div className='Physics_sub_heading'>Laboratories</div>
    </div>
    <Sh_Phy_lab/>
    <Backtotop/>
    </div>
  )
}

export default Physics_lab_facility
