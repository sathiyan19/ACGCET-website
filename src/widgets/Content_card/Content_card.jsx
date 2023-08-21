import React from "react";

import "./Content_card.css";

const Content_card = ({ heading, intake, pdf }) => {
  return (
    <div className="cont_card">
      <div className="card_body">
        <div className="card_bg"></div>

        <div className="card_title">{heading}</div>

        {intake && (
          <div className="card_sub">
            Intake:&nbsp;
            <span className="card_detail">{intake}</span>
          </div>
        )}

        {pdf && (
          <a className="card_sub_link" href={pdf} target="blank" rel="noopener noreferrer" media="print">
            View pdf&nbsp;&nbsp;&nbsp;<span className="fa fa-angle-double-right double_arrow"></span>
          </a>
        )}
        
      </div>
    </div>
  );
};

export default Content_card;
