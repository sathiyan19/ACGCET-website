import React from 'react'

import { Backtotop } from '../../widgets'
import { Sh_tab_lab } from '../../components'

const Sh_lab_facility = () => {
  return (
    <div className="Sciencedept">
      <div className="Sciencebg">
        <div className="Scienceheading">
          Department of Science and Humanities
        </div>
        <div className='Science_sub_heading'>Laboratories</div>
    </div>
    <Sh_tab_lab/>
    <Backtotop/>
    </div>
  )
}

export default Sh_lab_facility
