import React from 'react'

import mapa from '../img/mapa.png'

function Footer() {
  return (
    <div className='footer-container'>
      {/* <p>



 

ePUAP:

Nasza skrytka w ePUAP: /tlkmed/SkrytkaESP

Link do ePUAP: Pismo Ogólne do Podmiotu Publicznego

W celu przekazania pisma do TLK MED Sp z o.o., po zalogowaniu do platformy należy:

- wybrać "Pisma do urzędu", a następnie: "Pismo do podmiotu publicznego"

- wyszukać adresata wpisując: tlkmed</p> */}

        <div className='footer-items'>

          <div className='footer-adres'>
            <p>Recepcja TLK MED</p>
              <p>+48 (12) 294 18 45</p>
              <p>+48 (12) 294 20 83</p>
              <p>Rejestracja do działu Fizjoterapii Ambulatoryjnej (NFZ):</p>
              <p>Poniedziałek - Piątek: 10.00 - 20.00</p>
              <p>Administracja TLK MED Sp.z.o.o</p>
              <p>ul. Cystersów 16</p>
              <p>31-553 Kraków</p>
              <p>tlkmed@tlkmed.com.pl</p>
              <p>Biuro Dyrekcji</p>
              <p>sekretariat@tlkmed.com.pl</p>
              <p>+ 48 (12) 294 18 45 ext. 106</p>
              <p>fax ext. 100</p>
              <p>Księgowość</p>
              <p>t.ciacma@tlkmed.com.pl  </p>
              <p>+ 48 (12) 294 18 45 ext. 105 </p>
              

          </div>
          <div className='footer-godziny'>
              <p>Godziny otwarcia: </p>
              <p>Poniedziałek - Piątek: 8.00 - 20.00</p>
              <p>Sobota: 8.00 - 14.00</p>

          </div>

          <div className='footer-mapa'>
            <img src={mapa} alt='mapa'></img>
          </div>
        </div>
    </div>
  )
}

export default Footer