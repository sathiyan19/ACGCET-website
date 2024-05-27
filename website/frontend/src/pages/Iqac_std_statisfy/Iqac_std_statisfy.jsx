import React ,{useEffect}from 'react'

import "./Iqac_std_statisfy.css"
import { Floatinmenu,Underline ,Content_card} from '../../widgets'
import { iqac_floater_menu,Iqac_std_statisfy_data } from "../../constants/iqac"
const Iqac_std_statisfy = () => {
    useEffect(() => {
        document.title = 'ACCET-IQAC | Strategic Plan';
      }, []);
    
  return (
    <div className="Iqac_std_statisfy_whole">
      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>

      <Underline heading="Student Satisfaction Survey" />
      <div className="Iqac_std_statisfy_content_card">

      {Iqac_std_statisfy_data.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}
      </div>


    </div>
  )
}

export default Iqac_std_statisfy
