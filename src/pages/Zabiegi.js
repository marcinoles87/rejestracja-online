import React from 'react'

import zdj1 from '../img/reha_1.png'
import zdj2 from '../img/reha_2.png'
import zdj3 from '../img/reha_3.png'


function Zabiegi() {

const zabiegi = [
    {
        name:'Zabiegi fizioterapeutyczne',
        description:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        zdjecie:zdj1,
        price:'od 244zł'
    } ,

    {
        name:'Masaż',
        description:'lorem ipsum ',
        zdjecie:zdj2,
        price:'od 244zł'
    } ,

    {
        name:'SOLUX x KINEZO x KRIO',
        description:'lorem ipsum ',
        zdjecie:zdj3,
        price:'od 244zł'
    }
    
]

  return (
    <div className='zabiegi-container'>
        <div className='zabiegi-items'>
            {zabiegi.map( (item , index) => {
                return(
                    
                    <div className='zabieg' key={index}>
                        <img src={item.zdjecie} alt={item.name}></img>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>


                
                    
                )
            })}
        </div>
    </div>
  )
}

export default Zabiegi