import React from 'react'
import "./Successful_dialog.css";

const Successful_dialog = ({heading}) => {
  return (
    <div className='success_dialog_outer'>
        <div className='success_dialog_inner'>
        {heading && (
          <div>
            <p>{heading}</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default Successful_dialog