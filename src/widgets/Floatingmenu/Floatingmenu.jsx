import React from 'react'

import './Floatingmenu.css'

const Floatingmenu = ({logo,head,links, from_top}) => {
  const IconComponent = logo;
  return (
    <div className="in_this_sec" style={{top: from_top}}>
        <p>{logo&&(<IconComponent/>)}&nbsp;&nbsp;&nbsp;{head}</p>
        <div>
            {links.map((item)=><a key={item.id} href={item.path}>{item.link}&nbsp;&nbsp;&nbsp;<div className='arrow fa fa-chevron-right'></div></a>)}
        </div>
    </div>
  )
}

export default Floatingmenu