import React from 'react'

import './Information.css'

import { bulletin_info } from '../../constants/bulletin_board'

const Information = () => {
  return (
    <div className="important">
        <div className="bulletin">
            <div className="board">Bulletin Board</div>
            <div className="line"></div>
            {/* <ul className="list"> */}
            <marquee  className="list" loop="infinite" direction="up" scrollamount="2">
              {bulletin_info.map((item)=><li className='msg'><a className='impmsg' target='blank' href={item.link}>{item.content}</a></li>)}
            </marquee>
            {/* </ul> */}
        </div>
        <div className="quick">
            <a href="https://www.tneaonline.org" target='blank' className="quick-link">Admission</a>
            <a href="http://www.tnlea.com/lea/registration/application/" target='blank' className="quick-link">Lateral Admission</a>
            <a href="https://www.accet.co.in" target='blank' className="quick-link">Results</a>
            <a href="/scholarship" className="quick-link">Scholarships</a>
            <a href="/fee-structure" className="quick-link">Fee Structure</a>
            
        </div>
    </div>
  )
}

export default Information