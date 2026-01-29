import React from 'react'

import logo from '../img/logo.png'
import Nav from '../components/Nav'

function Header() {
  return (
    <div className='header-container'>

        <div className='header-logo'>
           <img src={logo} alt='logo'></img> 
        </div>

        <div className='header-info'>
            <Nav></Nav>
        </div>
        

    </div>
  )
}

export default Header