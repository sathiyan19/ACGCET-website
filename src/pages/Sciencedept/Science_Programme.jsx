import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_tab_Programme } from '../../components'

const Science_Programme = () => {
  useEffect(() => {
    document.title = 'ACCET-S&H | Programme Organized';
  }, []);
  return (
    <div className="Sciencedept">
      <div className="Sciencebg">
        <div className="Scienceheading">
          Department of Science and Humanities
        </div>
        <div className='Science_sub_heading'>Programme Organized</div>
    </div>
    <Sh_tab_Programme/>
    <Backtotop/>
    </div>
  )
}

export default Science_Programme
