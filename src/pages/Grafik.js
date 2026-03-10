import React from 'react'
import Dzien from './Dzien';
import { Link } from 'react-router';
import Personel from './Personel';

function Grafik({setTablica}) {


  const data = new Date()
  const month = data.getMonth()+1
  const iloscMiesiecy = 12



  const tablicaPracownikow = [
    {
      dzien:'',
      osoba1:'',
      zmiana:'',
      startZmiany:'',
      koniecZmiany:'',
      iloscGodzin:'',
    
    }
  ];

  const monthName = ['styczeń','luty','marzec','kwiecien','maj','czerwiec','lipiec','sierpien','wrzesien','pazdziernik','listopad','grudzien']

  const imiona = ['ola','ala','io', 'ml','st','tk','pn','xx','wk','pn','mr','ss']



  for(let i = 1 ; i <= iloscMiesiecy-1 ; i++){
    tablicaPracownikow.push({dzien:i , osoba1:imiona[i]})
  }

 
  return (

    
         <div className='rejestracja-kalendarz'>
            {tablicaPracownikow.map( (item,index) =>{
              return(
                

                <div className='dzien' key={index} >
                  
                  <Link to={'/dzien'}> {monthName[index]} </Link>
                </div>
              
              )
            })}

          </div>


  
  )
}

export default Grafik