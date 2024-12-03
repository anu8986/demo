import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Contactus from '../section/contactus';


const Navbar = () => {
  const [show, setshow] = useState(false);
  

  const hanleclick = () => {
    setshow(!show)
  }
  return (
    <div className='container col-11 nav-container'>
      <div className='nav-fix'>
        <div className='navbar-section'>
          <nav className='navbar-container'>
            <div>
              <h1 className='heading-fonts'><span className='heading-nav'>TECH</span>REALTORS</h1>
            </div>
            <div className='nav-option'>

              <ul className='list-items'>
                <li>Agents</li>
                <li>Properties</li>
                <li>About</li>
              </ul>
              {show ?
                <Contactus />
                : null}

              <div className='menu-icons'>
                {show ?
                  < IoCloseSharp onClick={hanleclick} className='menu-icon-nav' />
                  :
                  <RiMenu3Fill onClick={hanleclick} className='close-icons-nav' />
                }
              </div>
            </div>
          </nav>

        </div>
      </div>
    </div>
  )
}

export default Navbar