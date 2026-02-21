import React from 'react'

function Miesiac() {

  const data = new Date()
  const month = data.getMonth()+1
  const iloscDni = 30

  const tablica = [
    {
      dzien:'',
      osoba1:'',
      osoba2:''
    }
  ];

  const imiona = ['ola','ala']

  for(let i = 0 ; i <= iloscDni ; i++){
    tablica.push({dzien:i , osoba1:imiona[0] , osoba2:imiona[1]})
  }

  const handleClick = (e) =>{

    const element = e.target
    element.classList.toggle('green')
    
  }
  return (
    
         <div className='rejestracja-kalendarz'>
            {tablica.map( (item,index) =>{
              return(
                
                <div className='dzien' key={index} onClick={handleClick}>
                  <p>{item.dzien}</p>
                  <p>{item.osoba1}</p>
                  <p>{item.osoba2}</p>
                </div>
              
              )
            })}
          </div>
  
  )
}

export default Miesiac