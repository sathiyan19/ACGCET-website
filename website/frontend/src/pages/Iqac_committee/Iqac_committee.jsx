import React,{useEffect} from 'react'
import "./Iqac_committee.css"
import { Floatinmenu,Underline ,Content_card} from '../../widgets'
import { iqac_floater_menu,iqac_com } from "../../constants/iqac"


const Iqac_committee = () => {
    useEffect(() => {
        document.title = 'ACCET-IQAC | Committee';
      }, []);
    
  return (
    <div className="iqac_com_whole">
    <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>

    <Underline heading="Iqac Committee" />
    <div className="iqac_com_content_card">

    {iqac_com.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
    </div>


  </div>
  )
}

export default Iqac_committee