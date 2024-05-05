import React,{useEffect} from 'react'

import './Physicsdept.css'
import { Sh_Physics } from '../../containers';

import { Sh_tabs } from '../../components'
import { Backtotop } from '../../widgets'

const Physicsdept = () => {
  useEffect(() => {
    document.title = 'ACCET-Physics Department';
  }, []);
  return (
      <div className="Physicsdept">
      <div className="Physicsbg">
        <div className="Physicsheading">
          Department Of Physics
        </div>
    </div>
    <Sh_Physics/>
    <Backtotop/>
    </div>
  )
}

export default Physicsdept
