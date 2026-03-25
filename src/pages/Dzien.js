import React, { useState } from 'react'

function Dzien({tablica,pracownicy}) {

  const [kolor,setKolor] = useState()
  const [zmianaStart,setStart] = useState()
  const [zmianaKoniec,setKoniec] = useState()
  const [sumaGodzinZmiany,setSumaGodzinZmiany] = useState()

  console.log(pracownicy[0])
  console.log(pracownicy[1])

  


  const dzienMiesiaca = []

  for( let i = 1 ; i <=31-1 ; i++ ){
    dzienMiesiaca.push(i)
  }



  const handlePodsumuj = (e) => {
    setSumaGodzinZmiany(zmianaKoniec-zmianaStart)
    
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
          <button onClick={handlePodsumuj}>Podsumuj godziny</button>
      </div>

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Grafik Pracowników 📅</h1>
      <ul>
        {pracownicy.map((shift) => (
          <li key={shift.id} style={{ marginBottom: '10px', listStyle: 'none', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{shift.imie}</strong> : {shift.start} — {shift.koniec}
          </li>
        ))}
      </ul>
    </div>

        

    </div>
  )
}

export default Dzien