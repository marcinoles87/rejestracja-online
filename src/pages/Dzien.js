import React, { useState } from 'react'

function Dzien({tablica,pracownicy}) {

  const [kolor,setKolor] = useState()
  const [zmiana,setZmiana] = useState()

  console.log(pracownicy[0])
  console.log(pracownicy[1])


  const dzienMiesiaca = []

  for( let i = 1 ; i <=31-1 ; i++ ){
    dzienMiesiaca.push(i)
  }


  const handleAdd = (e) => {
    
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

     <table>
      
      <tr>
        <td>Dzień</td>
        
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
            <td>{item} dzien</td>
            {pracownicy.map( (item,index) => {
              return(
                <>
                <td><input onChange={ (e) => setZmiana(e.target.value)}></input>{zmiana}</td>
                </>
              )
            })}
          
          </tr>
          </>
          
          
        )
      })}

      
        
      
      
      
      
      

       

      
      
     </table>
        


       

        
    </div>
  )
}

export default Dzien