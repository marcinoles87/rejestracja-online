import React from 'react'
import { Link } from 'react-router'

import zdj1 from '../img/reha_1.png'
import zdj2 from '../img/reha_2.png'
import zdj3 from '../img/reha_3.png'


function Zabiegi() {

const zabiegi = [
    {
        name:'Zabiegi fizioterapeutyczne',
        description:'Rehabilitacja to proces medyczny, którego celem jest przywrócenie lub poprawa sprawności fizycznej, psychicznej i społecznej osoby po urazach, chorobach lub operacjach.  ',
        zdjecie:zdj1,
        price:'od 244zł',
        link:'fizio'
    } ,

    {
        name:'Masaż',
        description:'Rehabilitacja to proces medyczny, którego celem jest przywrócenie lub poprawa sprawności fizycznej, psychicznej i społecznej osoby po urazach, chorobach lub operacjach.  ',
        zdjecie:zdj2,
        price:'od 244zł',
        link:'masaz'
    } ,

    {
        name:'SOLUX x KINEZO x KRIO',
        description:'Rehabilitacja to proces medyczny, którego celem jest przywrócenie lub poprawa sprawności fizycznej, psychicznej i społecznej osoby po urazach, chorobach lub operacjach.  ',
        zdjecie:zdj3,
        price:'od 244zł',
        link:'solux'
    }
    
]

  return (
    <div className='zabiegi-container'>
        <div className='zabiegi-items'>
            {zabiegi.map( (item , index) => {
                return(
                    
                    <Link to={'/'+item.link}>
                    <div className='zabieg' key={index}>
                        <img src={item.zdjecie} alt={item.name}></img>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p style={{textAlign:'right'}}><span style={{fontSize:'2rem' , fontWeight:'bold' , color:'blue'}}>{item.price}</span></p>
                    </div>
                    </Link>


                
                    
                )
            })}
        </div>
    </div>
  )
}

export default Zabiegi