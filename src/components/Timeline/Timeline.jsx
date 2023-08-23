import React from "react";

import "./Timeline.css";

const Timeline = ({ head, house, content }) => {
  return (
    <div>
      <div className="timeline">
        <div className={`container1 ${house}`}>
          <div className="content">
            <h2>{head}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
