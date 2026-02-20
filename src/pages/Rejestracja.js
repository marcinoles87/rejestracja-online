import React from 'react'
import { Link, Route, Routes,Outlet } from 'react-router'



function Rejestracja() {

  
  
  return (

    

       <div className='rejestracja-container'>
          <div className='rejestracja-nav-left'>
            <p>Menu</p>
            <ul>
              <li>Dzien</li>
              <li>Wynik</li>
              <li>Data</li>
              <li>Pokój</li>
              <li>Doktor</li>
              <Link to={'/rejestracja/miesiac'}>Rejestracja miesieczna</Link>

              <p style={{width:'10px',height:'10px',backgroundColor:'green'}}></p>
              <p>wolne</p>
              
            </ul>

          </div>
          <Outlet /> 


         

    </div>
  

   
  )
}

export default Rejestracja