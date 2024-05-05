import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import {  Sh_mat_lab } from '../../containers';

const Maths_lab_facility = () => {
  useEffect(() => {
    document.title = 'ACCET-Maths | Laboratories';
  }, []);
  return (
    <div className="Mathsdept">
      <div className="Mathsbg">
        <div className="Mathsheading">
          Department of Mathematics
        </div>
        <div className='Maths_sub_heading'>Laboratories</div>
    </div>
    <Sh_mat_lab/>
    <Backtotop/>
    </div>
  )
}

export default Maths_lab_facility
