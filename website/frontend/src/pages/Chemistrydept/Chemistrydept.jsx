import React,{useEffect} from 'react'

import './Chemistrydept.css'

import { Sh_Chemistry } from '../../containers';
import { Backtotop } from '../../widgets'

const Chemistrydept = () => {
  useEffect(() => {
    document.title = 'ACCET-Chemistry Department';
  }, []);
  return (
      <div className="Chemistrydept">
      <div className="Chemistrybg">
        <div className="Chemistryheading">
          Department of Chemistry
        </div>
    </div>
    <Sh_Chemistry/>
    <Backtotop/>
    </div>
  )
}

export default Chemistrydept
