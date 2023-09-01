import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Radial_menu.css'

const Radial_menu = ({menu_links}) => {
  const [menu_open, setmenu_open] = useState(false);

  const toggle_menu = () => {
    setmenu_open(!menu_open);
  };
  return (
    <>
      <div
        className={`radial_menu fa ${
          menu_open ? "fa-close radial_float_menu" : "fa-bars"
        }`}
        onClick={toggle_menu}
      ></div>
      <div className={`radial_bg ${menu_open ? "scaled" : ""}`}>
        <div className="dept_menu">
          <div className="dept_link_head">MENU</div>
          <div className="dept_link_holder">
            {menu_links.map((item)=><Link key={item.id} to={item.path} className="dept_links">{item.link}</Link>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Radial_menu;
