import React from 'react'

import './Floatingmenu.css'

const Floatingmenu = ({head,links}) => {
  return (
    <div className="in_this_sec">
        <p>{head}</p>
        <div>
            {links.map((item)=><li key={item.id}><a key={item.id} href={item.path}>{item.link}</a></li>)}
        </div>
    </div>
  )
}

export default Floatingmenu