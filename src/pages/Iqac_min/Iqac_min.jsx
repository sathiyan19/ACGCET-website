import React,{useEffect} from 'react'

import "./Iqac_min.css"

import { Floatinmenu,Underline } from '../../widgets'

import { Timeline } from "../../components";

import { iqac_min,iqac_floater_menu } from "../../constants/iqac"

const Iqac_min= () => {
  useEffect(() => {
    document.title = 'ACCET-IQAC | Minutes';
  }, []);
  return (
    <div className='iqac_feed_whole'>

      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>
      
      <Underline heading="IQAC Minutes" />
      

      {iqac_min.map((item) => (
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

export default Iqac_min