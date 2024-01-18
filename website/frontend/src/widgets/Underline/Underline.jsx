import React from "react";

import "./Underline.css";

const Underline = ({ heading }) => {
  return (
    <div>
      <div>
        {heading && (
          <div className="alltitle">
            <p className="alltitlep">{heading}</p>
          </div>
        )}
        <div className="l1"></div>
        <div className="l2"></div>
      </div>
    </div>
  );
};

export default Underline;
