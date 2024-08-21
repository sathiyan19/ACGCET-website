import React,{useEffect} from 'react'

import './Englishdept.css'

import { Sh_English} from '../../containers';
import { Backtotop } from '../../widgets'

const Englishdept = () => {
  useEffect(() => {
    document.title = 'ACCET-English Department';
  }, []);
  return (
      <div className="Englishdept">
      <div className="Englishbg">
        <div className="Englishheading">
          Department of English
        </div>
    </div>
    <Sh_English/>
    <Backtotop/>
    </div>
  )
}

export default Englishdept
