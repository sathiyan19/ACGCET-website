import React,{useEffect} from 'react'

import { Backtotop } from '../../widgets'
import {  Sh_mat_fac } from '../../containers';

const Maths_faculty = () => {
  useEffect(() => {
    document.title = 'ACCET-Maths | Faculties';
  }, []);
  return (
    <div className="Mathsdept">
      <div className="Mathsbg">
        <div className="Mathsheading">
          Department of Mathematics
        </div>
        <div className='Maths_sub_heading'>Faculties</div>
    </div>
    <Sh_mat_fac/>
    <Backtotop/>
    </div>
  )
}

export default Maths_faculty
