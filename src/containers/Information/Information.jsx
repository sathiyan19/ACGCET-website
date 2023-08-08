import React from 'react'

import './Information.css'

const Information = () => {
  return (
    <div className="important">
        <div className="bulletin">
            <div className="board">Bulletin Board</div>
            <div className="line"></div>
            <ul className="list">
                {/* Marquee can be implemented using CSS animations or JavaScript */}
                <li className="msg"><a href="#" className="impmsg">College Fee 2022-23 for BE regular & part-time</a></li>
                <li className="msg"><a href="#" className="impmsg">College Fee 2022-23 for BE regular & part-time</a></li>
            </ul>
        </div>
        <div className="quick">
            <a href="#" className="quick-link">Lateral Admission</a>
            <a href="#" className="quick-link">Results</a>
            <a href="#" className="quick-link">Scholarships</a>
            <a href="#" className="quick-link">Fee Structure</a>
        </div>
    </div>
  )
}

export default Information