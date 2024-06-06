import React from 'react'

import { Backtotop,Floatinmenu, Underline,Modal} from "../../widgets";

import { Physics_dept_fmenu } from '../../constants/physics_dept';
import { Radial_menu } from "../../components";
import { GiPendulumSwing } from "react-icons/gi";

// import phylab from '../../assets/pictures/phylab.webp'
const phylab = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/phylab.webp"


const Sh_Phy_lab = () => {
  return (
    <div>
      <section className="shphydark">
        <div className="shphydept_float_menu">
          <Floatinmenu logo={GiPendulumSwing} head="Menu" links={Physics_dept_fmenu} />
        </div>
        <Radial_menu menu_links={Physics_dept_fmenu} />
        <div className="shphy_abt_area">
        <div className="shphy_abt">
        <Underline heading="Physics laboratory"/>
        <div className="shphytwo-col">
          <p className="shphy_dept_content">
          The Department of Physics stands as a beacon of scientific exploration, providing well-equipped laboratories that cater to the needs of various undergraduate programs, including Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering, Electronics and Communication Engineering, and Computer Science and Engineering. These laboratories are essential for conducting hands-on experiments and gaining practical insights into the world of physics.
</p>
          <div className="dept_img_holder">
            <img className="dept_img" src={phylab} />
          </div>
        </div>
        <div className="shphytwo-col1">
          <p className="shphy_dept_content">
          
The Department of Physics boasts an impressive array of instruments meticulously chosen to enrich the educational journey of its students. These instruments serve as indispensable tools, fostering a deep understanding of fundamental physics concepts and principles. Among the carefully curated equipment available are the Young's Modulus Apparatus with Scale and Telescope, Torsional Pendulum, Melde's String Apparatus, Coefficient of Viscosity Apparatus, Hysteresis Curve Apparatus, Planck's Constant Apparatus, Band Gap Apparatus, Carey-Foster Bridge, Air Wedge with Traveling Microscope, Spectrometers, and Lee's Disc.
Moreover, the department's Research Laboratory stands as a testament to its commitment to cutting-edge scientific inquiry. Equipped with sophisticated tools like the X-Ray Diffractometer, RF Magnetron Sputtering Unit, Digital Source Meter, Electric Muffle Furnace, Ultrasonic Cleaner, and Digital Balance, this laboratory provides a fertile ground for pioneering research within the institute.
</p>
  </div>
        </div>
        </div>
          </section>
    
          <Backtotop />
    </div>
  )
}

export default Sh_Phy_lab
