import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
    <div className='nav-container'>

        <div className='nav-elements'>
            <ul>
                <li><Link to={'/firma'}>Firma</Link></li>
                <li><Link to={'/rejestracja'}>Rejestracja</Link></li>
                <li><Link to={'/diagnostyka'}>Diagnostyka</Link></li>
                <li><Link to={'/rehabilitacja'}>Rehabilitacja</Link></li>
                <li><Link to={'/nfz'}>NFZ</Link></li>
                
                <li>Kontakt</li>
            </ul>
        </div>
        
        

    </div>
  )
}

export default Nav