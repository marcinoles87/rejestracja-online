import React, { useState } from 'react'

function Dzien({tablica,pracownicy,setTablica}) {

  const [kolor,setKolor] = useState()
  const [shifts,setShifts] = useState()
  const [formData,setFormData] = useState({imie:'',start:'',koniec:''})
  
 

  console.log(pracownicy[0])
  console.log(pracownicy[1])


  

  const handleDelete = () =>{

  }

  const handleAddPracownik = () =>{
    
    const newTablica = []
    setTablica([...pracownicy,newTablica])
    newTablica.push({id:'3',imie:'xxx'})    
    console.log(newTablica)

  }
  
  const handleNieobecnosc = (e) =>{
    setKolor('red')
    e.target.style.backgroundColor=kolor
  }

  const handleObecnosc = (e) =>{
    setKolor('green')
    e.target.style.backgroundColor=kolor
  }
  
  return (
    <div className='dzien-container'>

      <div className='dzien-buttons'>
          <button onClick={handleNieobecnosc}>Nieobecność</button>
          <button onClick={handleObecnosc}>Obecnosc</button>
      </div>

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Grafik Pracowników 📅</h1>
      <ul>
        {pracownicy.map((shift) => (
          <li key={shift.id} style={{ marginBottom: '10px', listStyle: 'none', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{shift.imie}</strong> : {shift.start} — {shift.koniec}
            <button onClick={handleDelete}>Usun</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddPracownik}>Dodaj pracownika</button>
    </div>

   <form action="" style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9' }}>
     <div>
      <label>Pracownik</label>
      <input type="text" placeholder='nazwa'></input>
     </div>

     <div>
      <label>Start</label>
      <input type="time" placeholder='start zmiany'></input>
     </div>
    
    <div>
     <label>Koniec</label>
      <input type="time" placeholder='koniec zmiany'></input>
     </div>

     <button>Dodaj</button>

   </form>

        

    </div>
  )
}

export default Dzien