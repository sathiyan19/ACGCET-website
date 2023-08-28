import React from 'react';
import './Progressbar.css'; // Don't forget to import your CSS file

const Progressbar = ({ bigperc, smallperc }) => {
    
    return (
        <div className="progressbar">
            <div className="progress" style={{ ['--i']: bigperc, '--clr': '#00134d' }}>
                <h3>{bigperc}<span>%</span></h3>
                <h4>Incampus</h4>
            </div>
            <div className="progress less" style={{ '--i': smallperc, '--clr': '#00134d' }}>
                <h3>{smallperc}<span>%</span></h3>
                <h4>Higher<br /> Studies</h4>
            </div>
        </div>
    );
}

export default Progressbar;
