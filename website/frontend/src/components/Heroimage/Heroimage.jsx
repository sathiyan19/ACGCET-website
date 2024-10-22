import React from 'react'

import './Heroimage.css'

const Heroimage = ({image,alternate}) => {
  return (
    <div className='clg'>
        <img className="clgpic" src={image} alt={alternate} />
    </div>
  )
}

export default Heroimage