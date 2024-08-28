import React,{useEffect} from 'react'

import "./Iqac_aqar.css"

import { Floatinmenu,Underline } from '../../widgets'

import { Timeline } from "../../components";

import { iqac_aqar,iqac_floater_menu } from "../../constants/iqac"


const Iqac_aqar = () => {
  useEffect(() => {
    document.title = 'ACCET-IQAC | AQAR Reports';
  }, []);
  return (
    <div className='iqac_aqar_whole'>
      
      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>
       
      <Underline heading="AQAR Report" />

      {iqac_aqar.map((item) => (
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

export default Iqac_aqar