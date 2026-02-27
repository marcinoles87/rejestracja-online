import React from 'react'

function Dzien({tablica}) {
  
  return (
    <div className='dzien-container'>Dzien
        {tablica.map( (item,index) => {
          return(
            <div key={index}>
            {item.osoba1}
            </div>
          )
        })}
    </div>
  )
}

export default Dzien