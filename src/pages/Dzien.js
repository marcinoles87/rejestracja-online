import React, { useState } from 'react'

function Dzien({tablica,pracownicy}) {

  const [kolor,setKolor] = useState()

  console.log(pracownicy[0])
  console.log(pracownicy[1])


  const dzienMiesiaca = []

  for( let i = 1 ; i <=31-1 ; i++ ){
    dzienMiesiaca.push(i)
  }

  
  const handleDelete = (e) =>{
    console.log(e.target)
    e.target.style.backgroundColor= kolor
  }

  const handleNieobecnosc = (e) =>{
    setKolor('red')
    e.target.style.backgroundColor=kolor
  }

  const handleObecnosc = (e) =>{
    setKolor('green')
    e.target.style.backgroundColor=kolor
  }
  
  return (
    <div className='dzien-container'>Dzien

    <button onClick={handleNieobecnosc}>Nieobecność</button>
    <button onClick={handleObecnosc}>Obecnosc</button>

     <table onClick={handleDelete}>
      
      <tr>
        
        {pracownicy.map( (item,index) => {
        return(
          <>
          <th>{item.imie} {item.nazwisko}</th>
          </>
          
        )
      })}
      </tr>

      
        {dzienMiesiaca.map( (item,index) => {
        return(
          <>
          <tr>
            {item}
          </tr>
          </>
          
        )
      })}
        
      
      
      
      
      

       

      
      
     </table>
        


       

        
    </div>
  )
}

export default Dzien