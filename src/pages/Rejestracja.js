import React from 'react'
import { Link, Route, Routes,Outlet } from 'react-router'



function Rejestracja() {

  
  
  return (

    

       <div className='rejestracja-container'>
          <div className='rejestracja-nav-left'>
            <p><strong>Menu</strong></p>
            
              
              <Link to={'/rejestracja/pokoje'}>Pokoje zabiegowe</Link>
              <Link to={'/rejestracja/miesiac'}>Rejestracja miesieczna</Link>

              <p ></p>
              <p> <span style={{width:'25px',height:'10px',backgroundColor:'green'}}>w</span> - wolne</p>
              <p> <span style={{width:'25px',height:'10px',backgroundColor:'red'}}>z</span> - zajete</p>
              
            

          </div>
          <Outlet /> 


         

    </div>
  

   
  )
}

export default Rejestracja