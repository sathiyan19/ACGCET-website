import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_Phy_research from '../../containers/Sh_Physics/Sh_Phy_research';

const Physics_research = () => {
  useEffect(() => {
    document.title = 'ACCET-Physics | Research & Publications';
  }, []);
  return (
    <div className="Physicsdept">
      <div className="Physicsbg">
        <div className="Physicsheading">
          Department of Physics
        </div>
        <div className='Physics_sub_heading'>Research and Publications</div>
    </div>
    <Sh_Phy_research/>
    <Backtotop/>
    </div>
  )
}

export default Physics_research
