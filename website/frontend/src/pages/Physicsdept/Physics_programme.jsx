import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_Phy_prog from '../../containers/Sh_Physics/Sh_Phy_prog';

const Physics_Programme = () => {
  useEffect(() => {
    document.title = 'ACCET-Physics | Programme Organized';
  }, []);
  return (
    <div className="Physicsdept">
      <div className="Physicsbg">
        <div className="Physicsheading">
          Department of Physics
        </div>
        <div className='Physics_sub_heading'>Programme Organized</div>
    </div>
    <Sh_Phy_prog/>
    <Backtotop/>
    </div>
  )
}

export default Physics_Programme
