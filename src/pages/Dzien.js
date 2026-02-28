import React from 'react'

function Dzien({tablica}) {

  const dzienMiesiaca = []

  for( let i = 8 ; i <=20 ; i++ ){
    dzienMiesiaca.push(i)
  }
  
  return (
    <div className='dzien-container'>Dzien

     <table>
      {tablica.map( (item,index) => {
        return(
          <>
          <th></th>
          
          <th>{item}</th>
          </>
          
        )
      })}

       {dzienMiesiaca.map( (item,index) =>{
        return(
          <>
          <tr>{item}</tr>
          </>
        )
       })}
      
     </table>
        


       

        
    </div>
  )
}

export default Dzien