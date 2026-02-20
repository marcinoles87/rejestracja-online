import React from 'react'
import { Link, Route, Routes,Outlet } from 'react-router'



function Rejestracja() {

  
  
  return (

    

       <div className='rejestracja-container'>
          <div className='rejestracja-nav-left'>
            <p><strong>Menu</strong></p>
            
              
              <Link to={'/rejestracja/pokoje'}>Pokoje zabiegowe</Link>
              <Link to={'/rejestracja/miesiac'}>Rejestracja miesieczna</Link>

              <p style={{width:'10px',height:'10px',backgroundColor:'green'}}></p>
              <p>wolne</p>
              
            

          </div>
          <Outlet /> 


         

    </div>
  

   
  )
}

export default Rejestracja