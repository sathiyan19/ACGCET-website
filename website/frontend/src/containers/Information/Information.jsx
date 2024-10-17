import React from "react";
import "./Information.css";
import { bulletin_info } from "../../constants/bulletin_board";

const Information = () => {
  return (
    <div className="important">
      <div className="bulletin">
        <div className="board">Bulletin Board</div>
        <div className="line"></div>
        <div
          className="list"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          <ul className="scroll-content">
            {bulletin_info.map((item) => (
              <li className="msg" key={item.link}>
                <a
                  className="impmsg"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="quick">
        <a
          href="https://www.tneaonline.org"
          target="blank"
          className="quick-link"
        >
          Admission
        </a>
        <a
          href="https://access.auerc.com/acgcoeta"
          target="blank"
          className="quick-link"
        >
          AUERC Remote Library
        </a>
        <a href="https://www.accet.co.in" target="blank" className="quick-link">
          Controller of Examination
        </a>
        <a href="/scholarship" className="quick-link">
          Scholarships
        </a>
        <a href="/fee-structure" className="quick-link">
          Fee Structure
        </a>
      </div>
    </div>
  );
};

const handleMouseOver = (e) => {
  e.currentTarget.querySelector('.scroll-content').style.animationPlayState = 'paused';
};

const handleMouseOut = (e) => {
  e.currentTarget.querySelector('.scroll-content').style.animationPlayState = 'running';
};

export default Information;
