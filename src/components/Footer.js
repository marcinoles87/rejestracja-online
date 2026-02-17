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
              <p><strong>Recepcja TLK MED</strong></p>
              <p>+48 (12) 294 18 45</p>
              <p>+48 (12) 294 20 83</p><br></br>
              <p><strong>Administracja TLK MED Sp.z.o.o</strong></p>
              <p>ul. Cystersów 16</p>
              <p>31-553 Kraków</p>
              <p>tlkmed@tlkmed.com.pl</p><br></br>
              <p><strong>Biuro Dyrekcji</strong></p>
              <p>sekretariat@tlkmed.com.pl</p>
              <p>+ 48 (12) 294 18 45 ext. 106</p>
              <p>fax ext. 100</p><br></br>
              <p><strong>Księgowość</strong></p>
              <p>t.ciacma@tlkmed.com.pl  </p>
              <p>+ 48 (12) 294 18 45 ext. 105 </p>
              

          </div>
          <div className='footer-godziny'>
              <p><strong>Godziny otwarcia: </strong></p>
              <p>Poniedziałek - Piątek: 8.00 - 20.00</p>
              <p>Sobota: 8.00 - 14.00</p>
              <p>Rejestracja do działu Fizjoterapii Ambulatoryjnej (NFZ):</p>
              <p>Poniedziałek - Piątek: 10.00 - 20.00</p>

          </div>

          <div className='footer-mapa'>
            
            <a href="https://www.bing.com/maps/search?name=TLK+MED+Sp+z+oo&trfc=&mepi=139%7E%7EEmbedded%7ELargeMapLink&FORM=MPSRPL&style=r&q=TLK+MED+Sp+z+oo&ss=id.ypid%3AYN7998x503682856&ppois=50.06463623046875_19.970081329345703_TLK+MED+Sp+z+oo&cp=50.064636%7E19.970081&lvl=15">
              <img src={mapa} alt='mapa'></img>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer