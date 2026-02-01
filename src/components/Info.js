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
          <input type="text" placeholder='Imię'></input>
          <input type="text" placeholder='Email'></input>
        </div>
    </div>
  )
}

export default Info