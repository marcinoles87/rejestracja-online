import React from 'react'
import Dzien from './Dzien';
import { Link } from 'react-router';
import Personel from './Personel';

function Grafik({setTablica}) {


  const data = new Date()
  const month = data.getMonth()+1
  const iloscDni = 30



  const tablica = [
    {
      dzien:'',
      osoba1:'',
      osoba2:'',
      miesiac:''
    }
  ];

  const monthName = ['styczeń','luty','marzec','kwiecien','maj','czerwiec','lipiec','sierpien','wrzesien','pazdziernik','listopad','grudzien']

  const imiona = ['ola','ala','io', 'ml','st','tk','pn','xx','wk','pn','mr','ss']



  for(let i = 0 ; i <= iloscDni ; i++){
    tablica.push({dzien:i , osoba1:imiona[i] , osoba2:imiona[i] , miesiac:monthName[i]})
    Array(1).push({dzien:i , osoba1:imiona[i] , osoba2:imiona[i]})
  }

  const handleClick = (e) =>{

    // setTablica(tablica)
    console.log(tablica)
    const element = e.target
    element.classList.toggle('green')
    
  }
  return (

    
         <div className='rejestracja-kalendarz'>
            {tablica.map( (item,index) =>{
              return(
                

                <div className='dzien' key={index} onClick={handleClick}>
                  
                  <Link to={'/dzien'}>Dzień  {item.dzien} </Link>
                </div>
              
              )
            })}

          </div>


  
  )
}

export default Grafik