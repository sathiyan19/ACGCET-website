import React,{useEffect} from 'react'
import "./Iqac_distinctiveness.css"
import { Floatinmenu,Underline ,Content_card} from '../../widgets'
import { iqac_floater_menu,distinctiveness_data } from "../../constants/iqac"

const Iqac_distinctiveness = () => {
  useEffect(() => {
    document.title = 'ACCET-IQAC | Institutional Distinctiveness';
  }, []);

  return (
    <div className="iqac_dis_whole">
      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>

      <Underline heading="Institutional Distinctiveness" />
      <div className="iqac_dis_content_card">

      {distinctiveness_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
      </div>


    </div>
  
  )
}

export default Iqac_distinctiveness
