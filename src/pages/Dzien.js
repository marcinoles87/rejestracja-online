import React, { useState } from 'react'

function Dzien({tablica,pracownicy,setTablica}) {

  const [kolor,setKolor] = useState()
  const [shifts,setShifts] = useState()
  const [formData,setFormData] = useState({pracownik:'',start:'',koniec:''})

  console.log(tablica)
  

  

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
  
 
  
  return (
    <div className='dzien-container'>

     

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Grafik Pracowników 📅</h1>
      <ul>
        {tablica.map((shift,index) => (
          <li key={shift.id} style={{ marginBottom: '10px', listStyle: 'none', border: '1px solid #ddd', padding: '10px' }}>
            <strong>{shift.pracownik}</strong> : {shift.start} — {shift.koniec}
            <button onClick={ () => { handleDelete(shift.id)}}>Usun</button>
          </li>
        ))}

      </ul>
    </div>

   <form action="" style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9' }}>
     <div>
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

        

    </div>
  )
}

export default Dzien