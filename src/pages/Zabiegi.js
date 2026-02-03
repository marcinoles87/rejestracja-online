import React from 'react'

import zdj1 from '../img/main.jpeg'

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
        zdjecie:zdj1,
        price:'od 244zł'
    } ,

    {
        name:'SOLUX x KINEZO x KRIO',
        description:'lorem ipsum ',
        zdjecie:zdj1,
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