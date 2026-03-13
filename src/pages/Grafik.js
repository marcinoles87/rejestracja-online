import React from 'react'
import Dzien from './Dzien';
import { Link } from 'react-router';
import Personel from './Personel';

function Grafik({setTablica}) {


  const monthName = ['styczeń','luty','marzec','kwiecien','maj','czerwiec','lipiec','sierpien','wrzesien','pazdziernik','listopad','grudzien']

 
  return (

    
         <div className='rejestracja-kalendarz'>
            {monthName.map( (item,index) =>{
              return(
                

                <div className='dzien' key={index} >
                  
                  <Link to={'/dzien'}> {item} </Link>
                </div>
              
              )
            })}

          </div>


  
  )
}

export default Grafik