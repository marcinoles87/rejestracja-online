
import './App.css';

import { useEffect, useState } from 'react';



function App() {


  const [tablica,setTablica] = useState([])
  const [zmiana,setZmiana] = useState('')
  const [godzinaStart,setGodzinaStart] = useState('')
  const [godzinaKoniec,setGodzinaKoniec] = useState('')
  const [dzien,setDniMiesiaca] = useState([])
  const [indexDnia,setIndex] =useState()
  
  //  let dniMiesiaca =[
  //   {dzien:1},
  //   {dzien:2},
  //  ]

  let dniMiesiaca = []

  for(let i=0; i < 2; i++){
    dniMiesiaca.push([])
  }


  useEffect( () => {
    setTablica(dniMiesiaca)
  },[])



  let pracownicy = [
    {name:'marcin'},
    {name:'iza'},
    {name:'kuba'},
    {name:'ania'},
  
  ]



  useEffect( () =>{
    console.log('wartosc tablicy to :' ,tablica)
    console.log('wartosc dni to :' ,dzien)
  },[tablica])
  
  const handleDelete = (item) =>{
    setTablica( (prevState) => prevState.filter( (e) => e.id !==item) )

  }



  const handleZmiana = () =>{

    console.log(zmiana)
    console.log(dniMiesiaca)
    console.log(indexDnia)
    pracownicy[zmiana].zmianaStart = godzinaStart
    pracownicy[zmiana].zmianaKoniec = godzinaKoniec
    pracownicy[zmiana].godziny = godzinaKoniec-godzinaStart
    console.log(pracownicy[zmiana])
    
    setDniMiesiaca( (prevDzien) => [...prevDzien,pracownicy])
    // setTablica(prevTablica =>[...prevTablica,pracownicy[zmiana]])

  }

   

  return (

        <div>

     

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Grafik Pracowników 📅</h1>

      <table>
        <thead>
          
           <tr>
            <th>x</th>
          {pracownicy.map( (item,index) =>{
            return(
              <th key={index} style={{padding:'20px'}}>
                {item.name}
                </th>

            )
          })}
          </tr> 
        </thead>
        <tbody>
          {dniMiesiaca.map( (item,index) =>{

            

            return(
              
              <tr key={index} onChange={ () => setIndex(index)}>
                <th>{item}</th>
                  {pracownicy.map( (item,index) =>{
                     return(
              
                      <th key={index} style={{padding:'20px'}} onChange={ () => setZmiana(index)}>
                        
                        <input type="number" onChange={ (e) =>setGodzinaStart(e.target.value)} placeholder='start' ></input>
                        <input type="number" onChange={ (e) =>setGodzinaKoniec(e.target.value)} placeholder='koniec' ></input>
                        <button onClick={handleZmiana}>Dodaj zmiane</button>
                      </th>
              

                )
              })}
              </tr>
           
              
            
            )
          })}
        
        </tbody>
        
      </table>

      <ul>
        {tablica.map((shift,index) => (
          
          <li key={index} style={{ marginBottom: '10px', listStyle: 'none', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{shift.name}</strong> : {shift.zmianaStart} — {shift.zmianaKoniec} godzin : {shift.zmianaKoniec-shift.zmianaStart} / dzien :{}
            <button onClick={ () => { handleDelete(shift.id)}}>Usun</button>
          </li>
        ))}
      </ul>
    </div>

 

        

    </div>
      
      
      



  
  )
}

export default App;
