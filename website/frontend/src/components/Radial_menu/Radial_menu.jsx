import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import './Radial_menu.css'

const Radial_menu = ({menu_links}) => {
  const [menu_open, setmenu_open] = useState(false);

  const toggle_menu = () => {
    setmenu_open(!menu_open);
  };
  useEffect(()=>{
    const handleRadialdis = () => {
      if(window.innerWidth>500){
        setmenu_open(false)
      }
    };
    window.addEventListener('resize', handleRadialdis);
  },[]);

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
            {menu_links.map((item)=><Link key={item.id} onClick={toggle_menu} to={item.path} className="dept_links">{item.link}</Link>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Radial_menu;
