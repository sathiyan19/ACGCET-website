import React from 'react';
import './Videocard.css';

const Videocard = ({ imageSrc, title, videoSrc }) => {
  const handleViewVideo = () => {
    window.open(videoSrc, '_blank'); // Opens the video in a new tab
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
      </div>
      <div className="card-footer">
        <button className="view-video-button" onClick={handleViewVideo}>
          View Video
        </button>
      </div>
    </div>
  );
};

export default Videocard;
