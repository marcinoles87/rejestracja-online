import React from 'react'

function Dzien({tablica}) {

  const dzienMiesiaca = []

  for( let i = 0 ; i <=31 ; i++ ){
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