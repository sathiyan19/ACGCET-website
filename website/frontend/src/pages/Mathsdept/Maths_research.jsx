import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import Sh_mat_research from '../../containers/Sh_Maths/Sh_mat_research';

const Maths_research = () => {
  useEffect(() => {
    document.title = 'ACCET-Maths | Research & Publications';
  }, []);
  return (
    <div className="Mathsdept">
      <div className="Mathsbg">
        <div className="Mathsheading">
          Department of Mathematics
        </div>
        <div className='Maths_sub_heading'>Research and Publications</div>
    </div>
    <Sh_mat_research/>
    <Backtotop/>
    </div>
  )
}

export default Maths_research
