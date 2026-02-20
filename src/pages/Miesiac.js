import React from 'react'

function Miesiac() {

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
    
         <div className='rejestracja-kalendarz'>
            {tablica.map( (item,index) =>{
              return(
                <p className='dzien' key={index} onClick={handleClick}>
                {item}
                </p>
              )
            })}
          </div>
  
  )
}

export default Miesiac