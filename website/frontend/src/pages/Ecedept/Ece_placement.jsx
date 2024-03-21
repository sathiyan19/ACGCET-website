import React, { useEffect } from "react";

import "./Ece_placement.css";

import { Backtotop, Floatinmenu, Underline, Progressbar,Content_card } from "../../widgets";
import { ece_dept_menu, ece_placement_info,ece_intern } from "../../constants/ece_dept";

import { Radial_menu } from "../../components";

import { FaMicrochip } from "react-icons/fa6";

const Ece_placement = () => {
  useEffect(() => {
    document.title = "ACCET-ECE | Placement Activities";
  }, []);
  return (
    <div className="ecedept">
      <div className="ecebg">
        <div className="eceheading">
          Department of Electronics and Communication Engineering
        </div>
        <div className="ece_sub_heading">Placement Activities</div>
      </div>
      <section className="ecedark">
        <div className="dept_float_menu">
          <Floatinmenu logo={FaMicrochip} head="Menu" links={ece_dept_menu} />
        </div>
        <Radial_menu menu_links={ece_dept_menu} />
        <div className="ece_placement_area">
          <Underline heading="Placement Details" />
          <div className="ece_place_chart_holder">
            {ece_placement_info.map((object) => (
              <>
                <div className="ece_place_head">{object.year}</div>
                <div className="ece_place_hold">
                  {object.details.map((item) => (
                    <Progressbar
                      key={item.id}
                      percent1={item.perc}
                      display1={item.perc}
                      symbol={item.symbol}
                      heading={item.heading}
                    />
                  ))}
                  <div className="ece_place_high_salary">
                    <div className="ece_place_high_head">Highest Salary:</div>
                    <div className="ece_place_high_content">
                      {object.salary}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="ece_intern_container">
          <Underline heading="Internship Details" />

          <div className="ece_intern_cards">
            {ece_intern.map((item) => (
              <Content_card
                key={item.id}
                heading={item.program}
                pdf={item.pdf}
              />
            ))}
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Ece_placement;
