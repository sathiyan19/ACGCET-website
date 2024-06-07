import React,{useEffect}from 'react'
import "./Research.css";
import { Backtotop,Floatinmenu, Underline,Content_card} from "../../widgets";
import { Main_Research_cse,Main_Research_civil,Main_Research_ece,Main_Research_eee,Main_Research_mech,Research_Promotion_Policy} from "../../constants/Research";



const Research = () => {
    useEffect(() => { 
        document.title = 'ACCET | Research';
      }, []);
  return (
    <div>
        <div className="Research_area">
          <Underline heading="Research"/>
        </div>

        <div className="content_card_holder">
              {/* {Main_Research_cse.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)} */}

              {Main_Research_ece.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}

              {Main_Research_eee.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}

              {Main_Research_mech.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}

              {Main_Research_civil.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}

              {Research_Promotion_Policy.map((item)=><Content_card key={item.id} heading={item.program} pdf={item.pdf}/>)}

         </div>


      
    </div>
  )
}

export default Research
