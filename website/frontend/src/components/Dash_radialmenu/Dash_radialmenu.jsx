import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './Dash_radialmenu.css'

const Dash_radialmenu = ({menu_links}) => {
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
          className={`radial_menud fa ${
            menu_open ? "fa-close radial_float_menu" : "fa-bars"
          }`}
          onClick={toggle_menu}
        ></div>
        <div className={`radial_bgd ${menu_open ? "scaled" : ""}`}>
          <div className="dept_menu">
            <div className="dept_link_headd">MENU</div>
            <div className="dept_link_holderd">
              {menu_links.map((item)=><Link key={item.id} onClick={toggle_menu} to={item.path} className="dash_links">{item.link}</Link>)}
            </div>
          </div>
        </div>
      </>
    );
  };

export default Dash_radialmenu