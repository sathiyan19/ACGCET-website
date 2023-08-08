import React from 'react'

const Dropdown = ({type,title,links}) => {

  let class_name
  if(type==="1"){
    class_name="nav-link"
  }else if(type==="2"){
    class_name="nav-link idiot"
  }else if(type==="3"){
    class_name="nav-link link"
  }
  
  return (
    <div className="dropdown">
        <li className='nav-item'>
            <a className={class_name} aria-current="page">{title}</a>
        </li>
         <div className="dropdown-content">
            {links.map((item)=><a key={item.link} href={item.path}>{item.link}</a>)}
            
        </div>
    </div>
  )
}

export default Dropdown