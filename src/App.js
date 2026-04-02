
import './App.css';

import { useEffect, useState } from 'react';



function App() {


  const [tablica,setTablica] = useState([])
  const [formData,setFormData] = useState({pracownik:'',start:'',koniec:''})
  const [zmiana,setZmiana] = useState('')
  const [godzinaStart,setGodzinaStart] = useState('')
  const [godzinaKoniec,setGodzinaKoniec] = useState('')
  

  let pracownicy = [
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
    console.log(pracownicy)
    console.log(zmiana)
    console.log(pracownicy[zmiana])
    pracownicy[zmiana].zmianaStart = godzinaStart
    pracownicy[zmiana].zmianaKoniec = godzinaKoniec
    pracownicy[zmiana].godziny = godzinaKoniec-godzinaStart
    setTablica(pracownicy)
    setTablica(prevTablica =>[...prevTablica,pracownicy[zmiana]])

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
              
                      <th key={index} style={{padding:'20px'}} onChange={ () => setZmiana(index)}>
                        
                        <input type="number" onChange={ (e) =>setGodzinaStart(e.target.value)} placeholder='start' ></input>
                        <input type="number" onChange={ (e) =>setGodzinaKoniec(e.target.value)} placeholder='koniec' ></input>
                        <button onClick={handleZmiana}>Dodaj zmiane</button>
                      </th>
              

            )
          })}
          </tr>
           
              
            </>
            )
          })}
        
        </tbody>
        
      </table>

      <ul>
        {tablica.map((shift,index) => (
          <li key={shift.id} style={{ marginBottom: '10px', listStyle: 'none', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{shift.name}</strong> : {shift.zmianaStart} — {shift.zmianaKoniec} godzin : {shift.zmianaKoniec-shift.zmianaStart}
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
    {/* <input type="text" placeholder='podaj godziny' onChange={ (e) =>setGodzina(e.target.value)}></input> */}
    <button onClick={handleZmiana}>dodaj zmiane</button>

        

    </div>
      
      
      



  
  )
}

export default App;
