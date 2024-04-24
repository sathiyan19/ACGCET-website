import React from 'react'

const Downloadbutton = () => {
  return (
    <button type="button" data-dl className="animated-download-button" onClick={handleClick}>
      <span className="dl-icon"></span>
      <span>Download</span>
    </button>
  )
}

export default Downloadbutton