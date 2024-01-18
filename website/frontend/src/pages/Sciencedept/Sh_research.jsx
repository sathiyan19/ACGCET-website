import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_tab_research } from '../../components'

const Sh_research = () => {
  useEffect(() => {
    document.title = 'ACCET-S&H | Research & Publications';
  }, []);
  return (
    <div className="Sciencedept">
      <div className="Sciencebg">
        <div className="Scienceheading">
          Department of Science and Humanities
        </div>
        <div className='Science_sub_heading'>Research and Publications</div>
    </div>
    <Sh_tab_research/>
    <Backtotop/>
    </div>
  )
}

export default Sh_research
