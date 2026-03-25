
import './App.css';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Info from './components/Info';


import {Routes,Route} from 'react-router'
import Rejestracja from './pages/Rejestracja';
import Cennik from './pages/Cennik';
import Firma from './pages/Firma'
import Diagnostyka from './pages/Diagnostyka';
import Nfz from './pages/Nfz';
import Rehabilitacja from './pages/Rehabilitacja';
import Zabiegi from './pages/Zabiegi';
import Fizio from './pages/Fizio';
import Masaz from './pages/Masaz';
import Solux from './pages/Solux';
import Specjalisci from './pages/Specjalisci';
import Pokoje from './pages/Pokoje';
import Dzien from './pages/Dzien';
import Personel from './pages/Personel';
import Grafik from './pages/Grafik';

function App() {

   const pracownicy = [

      {id:'1',pracownik:'ola nowak',start:'8',koniec:'16'},
      {id:'2',pracownik:'paweł krk',start:'16',koniec:'20'}
    
    ]

  const [tablica , setTablica] = useState(pracownicy)

    const imiona = ['ola','ala','io', 'ml','st','tk','pn','xx','wk','pn','mr','ss' , 'sw' , 'io']

    

    console.log(pracownicy)

    useEffect( () => {
      
      setTablica(pracownicy)

    },[])


   

  return (

    <div className="container">

    <Routes>
      

      <Route path='*' element={
        <>  
        
          <Header></Header>
          <Main></Main>
          <Info></Info>
          <Zabiegi></Zabiegi>
          <Footer></Footer>
          
          
        </>

     
 
      }/>


      <Route path='/firma' element={<Firma></Firma>}></Route>
      <Route path='/rejestracja' element={<Rejestracja></Rejestracja>}>
        <Route path='grafik' element={<Grafik setTablica={setTablica}></Grafik>}></Route>
        <Route path='pokoje' element={<Pokoje></Pokoje>}></Route>
        <Route path='personel' element={<Personel></Personel>}></Route>
      
      </Route>
      <Route path='/cennik' element={<Cennik></Cennik>}></Route>
      <Route path='/diagnostyka' element={<Diagnostyka></Diagnostyka>}></Route>
      <Route path='/nfz' element={<Nfz></Nfz>}></Route>
      <Route path='/rehabilitacja' element={<Rehabilitacja></Rehabilitacja>}></Route>
      <Route path='/fizio' element={<Fizio></Fizio>}></Route>
      <Route path='/masaz' element={<Masaz></Masaz>}></Route>
      <Route path='/solux' element={<Solux></Solux>}></Route>
      <Route path='/dzien' element={<Dzien tablica={tablica} pracownicy={pracownicy} setTablica={setTablica}></Dzien>}></Route>
      <Route path='/specjaliscie' element={<Specjalisci></Specjalisci>}></Route>
    
    </Routes>
      
      
      
    </div>


  
  )
}

export default App;
