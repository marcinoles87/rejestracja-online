import React, { useState } from 'react'

function Dzien({tablica,pracownicy,setTablica}) {

  const [kolor,setKolor] = useState()
  const [shifts,setShifts] = useState()
 

  console.log(pracownicy[0])
  console.log(pracownicy[1])

  

  const handleDelete = () =>{

  }

  const handleAddPracownik = () =>{
    set
    nowaZmiana.push({id:'3',imie:'adam'})
    

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

        

    </div>
  )
}

export default Dzien