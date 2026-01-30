import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
    <div className='nav-container'>

        <div className='nav-elements'>
            <ul>
                <li><Link to={'/firma'}>Firma</Link></li>
                <li>Rejestracja</li>
                <li>Cennik</li>
                <li>Diagnostyka medyczna</li>
                <li>Rehabilitacja</li>
                <li>NFZ</li>
                <li>Kontakt</li>
            </ul>
        </div>

    </div>
  )
}

export default Nav