import React,{useEffect} from 'react'

import './Sciencedept.css'

import { Sh_tabs } from '../../components'
import { Backtotop } from '../../widgets'

const Sciencedept = () => {
  useEffect(() => {
    document.title = 'ACCET-S&H Department';
  }, []);
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
