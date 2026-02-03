import React from 'react'

import zdj1 from '../img/main.jpeg'

function Zabiegi() {

const zabiegi = [
    {
        name:'Zabiegi fizioterapeutyczne',
        description:'lorem ipsum ',
        zdjecie:zdj1,
        price:'od 244zł'
    } ,

    {
        name:'Zabiegi fizioterapeutyczne',
        description:'lorem ipsum ',
        zdjecie:zdj1,
        price:'od 244zł'
    } ,

    {
        name:'Zabiegi fizioterapeutyczne',
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
                        <h1>{item.name}</h1>
                        <img src={item.zdjecie} alt={item.name}></img>
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