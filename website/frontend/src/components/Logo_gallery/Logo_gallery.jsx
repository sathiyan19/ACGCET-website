import React from 'react';
import './Logo_gallery.css';

const Logo_gallery = ({ logo_img, logo_desc }) => {
  return (
    <div className="placement-gallery-item">
      <img className="placement-gallery-image" src={logo_img} alt={logo_desc} />
    </div>
  );
};

export default Logo_gallery;
