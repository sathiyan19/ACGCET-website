import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import { Sh_tab_faculty } from '../../components'

const Sh_faculty = () => {
  useEffect(() => {
    document.title = 'ACCET-S&H | Faculties';
  }, []);
  return (
    <div className="Sciencedept">
      <div className="Sciencebg">
        <div className="Scienceheading">
          Department of Science and Humanities
        </div>
        <div className='Science_sub_heading'>Faculties</div>
    </div>
    <Sh_tab_faculty/>
    <Backtotop/>
    </div>
  )
}

export default Sh_faculty
