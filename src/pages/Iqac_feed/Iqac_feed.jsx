import React,{useEffect} from 'react'

import "./Iqac_feed.css"

import { Floatinmenu,Underline } from '../../widgets'

import { Timeline } from "../../components";

import { iqac_feed,iqac_floater_menu } from "../../constants/iqac"


const Iqac_feed = () => {
  useEffect(() => {
    document.title = 'ACCET-IQAC | Feedback Reports';
  }, []);
  return (
    <div className='iqac_min_whole'>

      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>

      <Underline heading="Feedback Reports" />


      {iqac_feed.map((item) => (
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

export default Iqac_feed