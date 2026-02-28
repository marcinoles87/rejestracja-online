import React from 'react'

function Dzien({tablica}) {

  const dzienMiesiaca = []

  for( let i = 8 ; i <=20 ; i++ ){
    dzienMiesiaca.push(i)
  }

  const handleDelete = (e) =>{
    // const element = document.querySelector(e)
    console.log(e.target)
    e.target.textContent=''
    e.target.style.backgroundColor='green'
  }
  
  return (
    <div className='dzien-container'>Dzien

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
      

       {dzienMiesiaca.map( (item,index) =>{
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