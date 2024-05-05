import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_mat_prog from '../../containers/Sh_Maths/Sh_mat_prog'

const Maths_Programme = () => {
  useEffect(() => {
    document.title = 'ACCET-Maths | Programme Organized';
  }, []);
  return (
    <div className="Mathsdept">
      <div className="Mathsbg">
        <div className="Mathsheading">
          Department of Mathematics
        </div>
        <div className='Maths_sub_heading'>Programme Organized</div>
    </div>
    <Sh_mat_prog/>
    <Backtotop/>
    </div>
  )
}

export default Maths_Programme
