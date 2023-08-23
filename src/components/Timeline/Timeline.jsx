import React from "react";

import "./Timeline.css";

const Timeline = ({ head, house, content, pdf }) => {
  return (
    <div>
      <div className="timeline">
        <div className={`timeline_container ${house}`}>
          <div className="timeline_content">
            <h2>{head}</h2>
            {content &&(<p>{content}</p>)}
            {pdf && (
              <div className="button_holder">
              <a className="timeline_link" href={pdf} target="blank" rel="noopener noreferrer" media="print">
              View pdf&nbsp;&nbsp;&nbsp;<span className="fa fa-angle-double-right double_arrow"></span>
            </a>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;