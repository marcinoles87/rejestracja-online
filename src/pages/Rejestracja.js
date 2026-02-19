import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Main from '../components/Main.js'


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

    

       <div className='rejestracja-container'>
          <div className='rejestracja-nav-left'>
            <p>Menu</p>
            <ul>
              <li>Dzien</li>
              <li>Wynik</li>
              <li>Data</li>
              <li>Pokój</li>
              <li>Doktor</li>
              <Link to={'/main'}>Main</Link>

              <p style={{width:'10px',height:'10px',backgroundColor:'green'}}></p>
              <p>wolne</p>
            </ul>

          </div>

          <Routes>
            <Route path='/main' element={<Main></Main>}></Route>
          </Routes>

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
  

   
  )
}

export default Rejestracja