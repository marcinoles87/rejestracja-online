import React from 'react'
import { Link, Route, Routes } from 'react-router'
import RejestracjaZabieg from './RejestracjaZabieg.js'

function Rejestracja() {
  return (

  <Routes>
    <Route path='/' element={
       <div className='rejestracja-container'>
      <div className='rejestracja-nav-left'>
        <p>Menu</p>
        <ul>
          <Link to={'/rejZab'}>Zabiegi</Link>
          <li>Dzien</li>
          <li>Wynik</li>
          <li>Data</li>
          <li>Pokój</li>
          <li>Doktor</li>
        </ul>

      </div>

    </div>
    }>

    </Route>

    <Route path={'/rejZab'} element={<RejestracjaZabieg></RejestracjaZabieg>}></Route>


    
  </Routes>
   
  )
}

export default Rejestracja