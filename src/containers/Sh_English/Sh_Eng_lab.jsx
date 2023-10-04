import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";

import { Sh_dept_fmenu } from '../../constants/Sh_dept_menu';
import { Radial_menu } from "../../components";
import englab from "../../assets/pictures/englab.webp"

import { RiEnglishInput } from "react-icons/ri";


const Sh_Eng_lab = () => {
  return (
    <div>
      <section className="shengdark">
        <div className="shengdept_float_menu">
          <Floatinmenu logo={RiEnglishInput} head="Menu" links={Sh_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Sh_dept_fmenu} />
        <div className="sheng_abt_area">
        <div className="sheng_abt">
        <Underline heading="English Language laboratory"/>
        <div className="shengtwo-col">
          <p className="sheng_dept_content">
          Our department takes pride in its state-of-the-art 
          language laboratory, meticulously designed to provide 
          a cutting-edge learning experience. Equipped with 
          modern technology and specialized tools, our lab 
          serves as an invaluable resource for honing 
          communication skills in the digital age. 
          Whether it's mastering the intricacies of language or 
          perfecting the art of effective communication, our 
          laboratory provides an immersive environment for our 
          students.
</p>
          <div className="dept_img_holder">
            <img className="dept_img" src={englab} />
          </div>
        </div>
        <div className="shengtwo-col1">
          <p className="sheng_dept_content">
          With a focus on catering to the evolving 
          needs of technocrats, it stands as a testament to our 
          commitment to fostering comprehensive and proficient 
          communicators, well-prepared for the challenges of 
          the modern world. Nestled within the heart of our department lies a language laboratory that is a true gem. This exceptional facility offers a rich array of resources, including top-tier equipment and cutting-edge technical gadgets. It's a haven for those eager to delve into the intricacies of communication in the digital era. The lab is not just a room filled with technology; it's a dynamic space where students can practice, learn, and grow. Our dedicated team of educators ensures that the lab's potential is maximized, providing a space where language skills flourish, and technocrats emerge as confident, articulate professionals ready to conquer the challenges of today's fast-paced world.</p>
        </div>
        </div>
        </div>
          </section>
    
          <Backtotop />
    </div>
  )
}

export default Sh_Eng_lab
