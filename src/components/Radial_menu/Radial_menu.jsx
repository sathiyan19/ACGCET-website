import React, { useState } from "react";

import './Radial_menu.css'

const Radial_menu = () => {
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
            <a href="#" className="dept_links">
              About the Department
            </a>
            <a href="#" className="dept_links">
              Vision and Mission
            </a>
            <a href="#" className="dept_links">
              Programme Education Objectives
            </a>
            <a href="#" className="dept_links">
              Programme Outcomes
            </a>
            <a href="#" className="dept_links">
              Faculty
            </a>
            <a href="#" className="dept_links">
              Supporting Staff
            </a>
            <a href="#" className="dept_links">
              Lab Faciaties
            </a>
            <a href="#" className="dept_links">
              Professional Socities
            </a>
            <a href="#" className="dept_links">
              Research and Pubacations
            </a>
            <a href="#" className="dept_links">
              Programmed Organized
            </a>
            <a href="#" className="dept_links">
              MoU
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radial_menu;
