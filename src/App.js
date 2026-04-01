
import './App.css';

import { useEffect, useState } from 'react';



function App() {


  const [tablica,setTablica] = useState([])
  const [formData,setFormData] = useState({pracownik:'',start:'',koniec:''})
  const [zmiana,setZmiana] = useState('')
  const [godzina,setGodzina] = useState('')
  

  const pracownicy = [
    {name:'marcin'},
    {name:'iza'},
    {name:'kuba'},
    {name:'ania'},
    {name:'radek'},
    {name:'wojtek'},
  ]

  let dniMiesiaca = []

  for(let i=0; i < 4; i++){
    dniMiesiaca.push(i+1)
  }
  
  const handleDelete = (item) =>{
    setTablica( (prevState) => prevState.filter( (e) => e.id !==item) )

  }

  const handleChange = (e) =>{

    e.preventDefault()
    
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })

  }


  const handleAdd = (e) =>{
    e.preventDefault()
    setTablica( prevUsers => [...prevUsers,formData])
    
  }

  const handleZmiana = () =>{
    console.log(zmiana)
    pracownicy[zmiana].zmiana = godzina
    console.log(pracownicy[zmiana])
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
              <>
              <tr>
                <th>{item}</th>
                  {pracownicy.map( (item,index) =>{
                     return(
              
                      <th key={index} style={{padding:'20px'}}>
                        <input type="text" onChange={ () => setZmiana(index)}></input>
                        <input type="text" onChange={ (e) =>setGodzina(e.target.value) }></input>
                        <button onClick={handleZmiana}>Dodaj zmiane</button>
                      </th>
              

            )
          })}
          </tr>
              {/* <tr key={index}>
                <td>{item}</td>
              </tr> */}
              
            </>
            )
          })}
        
        </tbody>
        
      </table>

      <ul>
        {tablica.map((shift,index) => (
          <li key={shift.id} style={{ marginBottom: '10px', listStyle: 'none', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{shift.pracownik}</strong> : {shift.start} — {shift.koniec} godzin : {shift.koniec-shift.start}
            <button onClick={ () => { handleDelete(shift.id)}}>Usun</button>
          </li>
        ))}

      </ul>
    </div>

   <form action="" style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9' }}>
     <div>
      <h1>Dodaj pracownika do zmiany</h1>
      <label>Pracownik</label>
      <input type="text" name='pracownik' value={formData.pracownik} onChange={handleChange} placeholder='nazwa'></input>
     </div>

     <div>
      <label>Start</label>
      <input type="number" name='start'  value={formData.start} onChange={handleChange} placeholder='start zmiany'></input>
     </div>
    
    <div>
     <label>Koniec</label>
      <input type="number" name='koniec'  value={formData.koniec} onChange={handleChange} placeholder='koniec zmiany'></input>
     </div>

     <button onClick={handleAdd}>Dodaj</button>

   </form>

    <input type="text" placeholder='podaj id pracownika' onChange={ (e) => setZmiana(e.target.value)}></input>
    <input type="text" placeholder='podaj godziny' onChange={ (e) =>setGodzina(e.target.value)}></input>
    <button onClick={handleZmiana}>dodaj zmiane</button>

        

    </div>
      
      
      



  
  )
}

export default App;
