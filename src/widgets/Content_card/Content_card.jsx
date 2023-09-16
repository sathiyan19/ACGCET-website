import React from "react";

import "./Content_card.css";

const Content_card = ({ top_head, heading, intake, pdf, period, year }) => {
  return (
    <div className="cont_card">
      <div className="card_body">
        <div className="card_bg"></div>

        {top_head && (<div className="card_top_head">{top_head}</div>)}

        <div className="card_title">{heading}</div>

        {intake && (
          <div className="card_sub">
            Intake:&nbsp;
            <span className="card_detail">{intake}</span>
          </div>
        )}
        {year && (
          <div className="card_sub">
          Established Year:&nbsp;
          <span className="card_detail">{year}</span>
        </div>
        )}
        {period && (
          <div className="card_sub">
          Period of Study:&nbsp;
          <span className="card_detail">{period}</span>
        </div>
        )}
        

        {pdf && (
          <a
            className="card_sub_link"
            href={pdf}
            target="blank"
            rel="noopener noreferrer"
            media="print"
          >
            View pdf&nbsp;&nbsp;&nbsp;
            <span className="fa fa-angle-double-right double_arrow"></span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Content_card;
