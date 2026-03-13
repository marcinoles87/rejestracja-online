import React, { useState } from 'react'

function Dzien({tablica,pracownicy}) {

  const [kolor,setKolor] = useState()

  console.log(pracownicy[0])
  console.log(pracownicy[1])


  const godzina = []

  for( let i = 1 ; i <=31-1 ; i++ ){
    godzina.push(i)
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
        <th></th>
        {pracownicy.map( (item,index) => {
        return(
          <>
          
          
          <th>{item.imie} {item.nazwisko}</th>
          </>
          
        )
      })}
      </tr>
      

       {godzina.map( (item,index) =>{
        return(
          <>
          <tr>{item}
            {tablica.map((item,index)=>{
              return(
               <>
              <td>
                <input placeholder='zmiana'></input>
              </td>
              </> 
              )
              
            })}
          </tr>
          </>
        )
       })}

       <tr>Suma 
        {tablica.map( (item,index) =>{
          return(
            <>
            <td>{item.iloscGodzin}h</td>
            </>
          )
        })}
       </tr>

      
      
     </table>
        


       

        
    </div>
  )
}

export default Dzien