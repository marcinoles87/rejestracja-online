import React, { useState } from 'react'

function Dzien({tablica}) {

  const [kolor,setKolor] = useState()


  const godzina = []

  for( let i = 8 ; i <=20 ; i++ ){
    godzina.push(i)
  }

  const handleDelete = (e) =>{
    // const element = document.querySelector(e)
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
        {tablica.map( (item,index) => {
        return(
          <>
          
          
          <th>{item}</th>
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
              <td>{item}</td>
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