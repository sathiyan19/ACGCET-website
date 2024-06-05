import React,{useEffect} from 'react'
import './Autonomous.css'
import { Underline } from '../../widgets'
import { Timeline } from "../../components";
import {Auto_reports} from '../../constants/autonomus'
const Autonomous = () => {
    useEffect(() => {
        document.title = 'ACCET-Autonomous';
      }, []);
  return (
    <div className='autonomous_whole'>
       <Underline heading="Autonomous Report" />
       <div className='autonomous_sub_container'>
        <div className='autonomous_sub'>
        {Auto_reports.map((item) => (
      <Timeline
                key={item.id}
                head={item.head}
                house={item.house}
                pdf={item.pdf}
              />
              ))}
        </div>
       </div>
       
</div>    
  )
}

export default Autonomous