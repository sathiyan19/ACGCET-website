import React from 'react'

import './Information.css'

const Information = () => {
  return (
    <div className="important">
        <div className="bulletin">
            <div className="board">Bulletin Board</div>
            <div className="line"></div>
            {/* <ul className="list"> */}
            <marquee  className="list" loop="infinite" direction="up" scrollamount="2">
                <li className="msg"><a className="impmsg">Commencement of First year B.E ( Full time) classes will be announced shortly.</a></li>
                <li className="msg"><a href="https://drive.google.com/file/d/10I5byy8zorNlU8Mlpnz1ObRac74EYWko/view?usp=drive_link" className="impmsg">First year part-time B.E. classes commences on 04.09.2023.</a></li>
                <li className="msg"><a href="https://drive.google.com/file/d/1yy5Gr8WhlTIwK7zNA6Y9uS9r1HbeOovq/view?usp=sharing" className="impmsg">First M.E. classes commences on 21.08.2023.</a></li>
                <li className="msg"><a href="https://drive.google.com/file/d/1N9yOpdr5ciHkcQ7-J0MHVHPb2LdARswY/view?usp=sharing" className="impmsg">Scholarship renewal</a></li>
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