import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenavbar.css';

const Sidenavbar = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex to 0 (first item)

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="dash-sidenav">
      {links.map((item, index) => (
        <Link
          key={index}
          to={item.dashboard_path1}
          className={`dash-side-nav-items ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          {item.dashboard_name1}
        </Link>
      ))}
    </section>
  );
};

export default Sidenavbar;
