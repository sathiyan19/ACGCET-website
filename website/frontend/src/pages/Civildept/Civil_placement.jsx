import React,{useEffect} from 'react'

import "./Civil_placement.css"
import { Radial_menu,Listformat } from "../../components";
import { BsFillBuildingsFill } from "react-icons/bs";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import { civ_dept_menu,civ_place_lt,civ_place_aarbee,civ_place_hexagon,civ_place_pinnacle,civ_place_24_conserve,civ_place_24_im,civ_place_24_lt,civ_place_24_pinnacle,civ_place_24_zoho} from "../../constants/civil_dept";


const Civil_placement = () => {
  useEffect(() => {
    document.title = 'ACCET-Civil | Placement';
  }, []);
  return (
    <div className="civdept">
    <div className="civbg">
      <div className="civheading">Department of Civil Engineering</div>
      <div className="civ_sub_heading">Placement Activities</div>
    </div>
    <section className="civdark">
      <div className="dept_float_menu">
        <Floatinmenu
          logo={BsFillBuildingsFill}
          head="Menu"
          links={civ_dept_menu}
        />
      </div>
      <Radial_menu menu_links={civ_dept_menu} />
      <div className='civ_place_area'>
        <Underline heading="Placement Details"/>
        <div className="civtwo-col1">
            <p className="civ_dept_content">
            We, the Department of Civil Engineering, extend our heartfelt congratulations to the remarkable placement achievers of the year 2019-2023. Your outstanding accomplishments are a testament to your dedication, hard work, and expertise in the field. We are immensely proud of your achievements and have every confidence that you will continue to excel in your future endeavors. Your success is an inspiration to all aspiring civil engineers, and we look forward to witnessing your continued growth and contributions to the field.
            </p>
          </div>

          <Underline heading="2020-2024"/>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Zoho Corporation</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_24_zoho}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: L&T</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_24_lt}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Infra Market</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_24_im}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Conserve Solutions</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_24_conserve}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Pinnacle</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_24_pinnacle}/>
          </div>

          <Underline heading="2019-2023"/>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: L&T</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_lt}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Hexagon</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_hexagon}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Aarbee Structures</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_aarbee}/>
          </div>
          <div className='res_head1'><h3><b className='ece_super'>Company</b>: Pinnacle</h3></div>
          <div className='civ_place_point'>
          <Listformat points={civ_place_pinnacle}/>
          </div>
          
      </div>
    </section>

    <Backtotop />
  </div>
  )
}

export default Civil_placement