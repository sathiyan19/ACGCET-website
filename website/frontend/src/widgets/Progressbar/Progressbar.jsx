import React from 'react'

import './Progressbar.css'
const Progressbar = ({percent1,heading,symbol,display1}) => {

    const strokeDashOffset = `calc(436px - (${percent1} * 4.36px))`;
    // const strokeDashOffset1 = `calc(436px - (${percent2} * 4.36px))`;

const customStyles = {
  '--stroke-dashoffset': strokeDashOffset,
//   '--stroke-dashoffset1':strokeDashOffset1,
};
  return (
    <div>
    <div className='progressbar'>
    <div className="skill">
        <div className="outer">
            <div className="inner">
                <div className="number">
                    <h4>{display1}{symbol}</h4>
                    <p>{heading}</p>
                </div>
            </div>
        </div>

<div className='circle1'>
        <svg className='progress_chart' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
               <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#00134d" />
                  <stop offset="100%" stop-color="#002699" />
               </linearGradient>
            </defs>
            
            <circle cx="80" cy="80" r="70" stroke-linecap="round" style={customStyles}/>
            
    </svg>
    </div>


    </div>
    {/* <div className='circle2'>
    <div className="skill">
        <div className="outer">
            <div className="inner">
                <div className="number">
                   <h4>{percent2}%</h4>
                   <p>Higher Studies</p>
                </div>
            </div>
        </div>


        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
               <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#00134d" />
                  <stop offset="100%" stop-color="#00134d" />
               </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" style={customStyles} />
    </svg>

</div>
    </div> */}

    </div>
      </div>
  )
}

export default Progressbar;
