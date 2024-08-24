// src/components/Alertmessage.js
import React, { useEffect } from 'react';
import './Alertmessage.css'; // Ensure the CSS file is named correctly

const Alertmessage = ({ message, onClose }) => {
  useEffect(() => {
    // Add style to body to prevent scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to restore scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!message) return null; // Do not render if there is no message

  return (
    <div className="alert-modal-overlay">
      <div className="alert-modal-content">
        <p>{message}</p>
        <button className="alert-modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Alertmessage;
