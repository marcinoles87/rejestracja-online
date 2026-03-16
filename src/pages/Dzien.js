import React, { useState } from 'react'

function Dzien({tablica,pracownicy}) {

  const [kolor,setKolor] = useState()
  const [zmianaStart,setStart] = useState()
  const [zmianaKoniec,setKoniec] = useState()
  const [sumaGodzinZmiany,setSumaGodzinZmiany] = useState()

  console.log(pracownicy[0])
  console.log(pracownicy[1])


  const dzienMiesiaca = []

  for( let i = 1 ; i <=31-1 ; i++ ){
    dzienMiesiaca.push(i)
  }



  const handlePodsumuj = (e) => {
    setSumaGodzinZmiany(zmianaKoniec-zmianaStart)
    
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
    <div className='dzien-container'>

      <div className='dzien-buttons'>
          <button onClick={handleNieobecnosc}>Nieobecność</button>
          <button onClick={handleObecnosc}>Obecnosc</button>
          <button onClick={handlePodsumuj}>Podsumuj godziny</button>
      </div>

   

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
                <td>
                  <input className='input-table' placeholder='start' onChange={ (e) => setStart(e.target.value)}></input>-
                  <input className='input-table' placeholder='koniec' onChange={ (e) => setKoniec(e.target.value)}></input>
                  <p>{zmianaStart}-{zmianaKoniec} ilość godzin : {sumaGodzinZmiany}</p>
                  </td>
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