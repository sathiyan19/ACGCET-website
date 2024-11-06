import React,{useEffect} from 'react'
import "./Iqac_strategic.css"
import { Floatinmenu,Underline ,Content_card,Backtotop} from '../../widgets'
import { iqac_floater_menu,Strategic_data } from "../../constants/iqac"
const Iqac_strategic = () => {
    useEffect(() => {
        document.title = 'ACCET-IQAC | Strategic Plan';
      }, []);
    
  return (
    <div>
    <div className="iqac_stra_whole iqac_card_one">
      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>

      <Underline heading="Strategic Plan" />
      <div className="iqac_stra_content_card">

      {Strategic_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
      </div>

      
    </div>
    <Backtotop />
    </div>
  )
}

export default Iqac_strategic