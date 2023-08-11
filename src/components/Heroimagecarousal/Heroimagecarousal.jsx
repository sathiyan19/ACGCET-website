import React from "react";
import { useEffect, useState } from "react";

import './Heroimagecarousal.css'

const Heroimagecarousal = ({ img_list, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = img_list;

  useEffect(() => {
    const changeBackgroundImage = () => {
      console.log(imageUrls[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };
    const interval = setInterval(changeBackgroundImage, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="clubs_hero">
      <div
        className="hero-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 19, 72, 0.3), rgba(0, 19, 72, 0.9)), url("${imageUrls[currentIndex]}")`,
        }}
      >
        <div className="hero-text">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Heroimagecarousal;
