import React,{useEffect} from 'react'
import './Autonomus.css'
import { Underline } from '../../widgets'
import { Timeline } from "../../components";
import {Auto_reports} from '../../constants/autonomus'
const Autonomus = () => {
    useEffect(() => {
        document.title = 'ACCET-Autonomous';
      }, []);
  return (
    <div className='autonomous_whole'>
       <Underline heading="Autonomous Report" />
       {Auto_reports.map((item) => (
      <Timeline
                key={item.id}
                head={item.head}
                house={item.house}
                pdf={item.pdf}
              />
              ))}
</div>    
  )
}

export default Autonomus