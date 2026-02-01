import React from 'react'
import main from '../img/main.jpeg'

function Info() {
  return (
    <div className='info-container'>
        <div className='info-banner'>
            <img src={main} alt='main-img'></img>
        </div>

        <div className='info-text'>
          <h1>Bądz na bieżąco</h1>
          <p>Zasubskrybuj nasz newsletter i bądź wśród pierwszych osób, które powiadomimy o nowych trasach i ofertach specjalnych.</p>

          <div>
             <input type="text" placeholder='Imię'></input>
          <input type="text" placeholder='Email'></input>

          </div>
         

          <label for="">
            <input type="checkbox"></input>
            Wyrażam zgode na otrzymywanie informacji handlowych od Firmy TLK-MED
          </label>
          
          <button>Subskrybuj</button>

        </div>
    </div>
  )
}

export default Info