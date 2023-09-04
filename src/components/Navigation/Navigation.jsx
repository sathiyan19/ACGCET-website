import React from 'react'

import './Navigation.css'

import desktop_logo from '../../assets/pictures/desktop-logo.webp'
import mobile_logo from '../../assets/pictures/mobile-logo.webp'

import {top_nav_paths,bottom_nav_paths} from '../../constants/path.js'

import {Dropdown} from '../../widgets'
import { Link } from 'react-router-dom'
const Navigation = () => {

    const togglemenu=()=>{
        console.log("CLICKED")
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    }

  return (
    <div className='navigation'>

        <nav className="navbar navbar-expand-xl navbar-dark" aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"></a>
                <button className="navbar-toggler border-0" onClick={togglemenu} type="button" id="navbarSideCollapse" data-toggle="collapse" data-target=".navbars" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse navbars" id="navbarSupportedContent">
                    <div className="container-fluid hi">
                        <ul className="navbar-nav good me-auto mb-2 mb-lg-0">

                            {top_nav_paths.map((item)=><Dropdown func={togglemenu} key={item.id} type={item.type} title={item.title} base={item.basepath} links={item.links}/>)}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <nav className="navbar sathiyan navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"></a>
                <div className="navbar-collapse offcanvas-collapse navbars" id="navbarsExampleDefault">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {bottom_nav_paths.map((item)=><Dropdown key={item.id} type={item.type} title={item.title} base={item.basepath} links={item.links}/>)}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div className="logo">
            <Link to="/" className="u"><img className='responsive' src={desktop_logo} alt="logo image" /></Link>
            <Link to="/" className="u"><img className='responsive1' src={mobile_logo} alt="logo image" /></Link>
        </div>

    </div>
  )
}

export default Navigation