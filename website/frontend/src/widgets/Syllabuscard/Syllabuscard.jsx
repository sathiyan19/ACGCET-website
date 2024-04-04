import React from 'react';
import "./Syllabuscard.css";

const Syllabuscard = ({ heading, pdf }) => {
  return (
    <div className="sybsyllabus">
      <div className="syb_body">
        <div className="syb_bg"></div>

        <div className="sybheading">{heading}</div>
        <div className="syblink">
          {pdf && (
            <a
              className="card_sub_link"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF

            </a>
          )}
        </div>
      </div>
    </div>

  );
};

export default Syllabuscard;
