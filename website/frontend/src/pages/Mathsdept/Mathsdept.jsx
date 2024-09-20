import React,{useEffect} from 'react'

import './Mathsdept.css'

import { Sh_Maths } from '../../containers';
import { Backtotop } from '../../widgets'

const Mathsdept = () => {
  useEffect(() => {
    document.title = 'ACCET-Maths Department';
  }, []);
  return (
      <div className="Mathsdept">
      <div className="Mathsbg">
        <div className="Mathsheading">
          Department of Mathematics
        </div>
    </div>
    <Sh_Maths/>
    <Backtotop/>
    </div>
  )
}

export default Mathsdept
