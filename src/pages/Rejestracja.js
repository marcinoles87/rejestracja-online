import React from 'react'
import { Link, Route, Routes } from 'react-router'

function Rejestracja() {

  const data = new Date()
  const month = data.getMonth()+1
  const iloscDni = 30

  const tablica = [];

  for(let i = 0 ; i <= iloscDni ; i++){
    tablica.push(i)
  }

  const handleClick = (e) =>{

    const element = e.target
    element.classList.toggle('green')
    
  }
  
  return (

    

  <Routes>
    <Route path='*' element={
       <div className='rejestracja-container'>
          <div className='rejestracja-nav-left'>
            <p>Menu</p>
            <ul>
              <li>Dzien</li>
              <li>Wynik</li>
              <li>Data</li>
              <li>Pokój</li>
              <li>Doktor</li>
            </ul>

          </div>

          <div className='rejestracja-kalendarz'>
            {tablica.map( (item,index) =>{
              return(
                <p className='dzien' key={index} onClick={handleClick}>
                {item}
                </p>
              )
            })}
          </div>

    </div>
    }>

    </Route>



    
  </Routes>
   
  )
}

export default Rejestracja