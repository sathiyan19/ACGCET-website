import React from 'react'

import './Sciencedept.css'

import { Sh_tabs } from '../../components'
import { Backtotop } from '../../widgets'

const Sciencedept = () => {
  return (
      <div className="Sciencedept">
      <div className="Sciencebg">
        <div className="Scienceheading">
          Department of Science and Humanities
        </div>
    </div>
    <Sh_tabs/>
    <Backtotop/>
    </div>
  )
}

export default Sciencedept
