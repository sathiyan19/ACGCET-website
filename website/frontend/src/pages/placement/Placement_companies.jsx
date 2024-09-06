import React, { useEffect } from 'react';
import { Floatinmenu } from '../../widgets';
import { Radial_menu, Logo_gallery } from '../../components';
import { placement_menu, placement_logo } from "../../constants/placement";
import { FaGraduationCap } from "react-icons/fa";
import { Underline, Backtotop } from '../../widgets';
// import './PlacementCompanies.css'; 

const PlacementCompanies = () => {
  useEffect(() => {
    document.title = 'ACCET-Placement-Recruiters';
  }, []);

  return (
    <div>
      <div className='placement'>
        <div className='placementbg'>
          <div className='placementheading'>
            Placement
          </div>
          <div className='placement_sub_heading'>Our Recruiters</div>
        </div>
        <section className='placementdark'>
          <div className='dept_float_menu'>
            <Floatinmenu logo={FaGraduationCap} head="Menu" links={placement_menu} />
          </div>
          <Radial_menu menu_links={placement_menu} />
          <div className="placement-gallery-container">
            <Underline heading="Our Recruiters" />
            <div className="placement-gallery">
              {placement_logo.map((logo) => (
                <Logo_gallery
                  key={logo.id}
                  logo_img={logo.logo_img}
                  logo_desc={logo.logo_desc}
                />
              ))}
            </div>
          </div>
        </section>
        <Backtotop />
      </div>
    </div>
  );
};

export default PlacementCompanies;
