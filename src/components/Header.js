import React from 'react'

import logo from '../img/logo.webp'

function Header() {
  return (
    <div className='header-container'>

        <div className='header-logo'>
           <img src={logo} alt='logo'></img> 
        </div>

        <div className='header-info'>
            <h1>Witamy w rejestracji TLK-MED</h1>
        </div>
        

    </div>
  )
}

export default Header