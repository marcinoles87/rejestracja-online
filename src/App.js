
import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Info from './components/Info';


import {Routes,Route,Link} from 'react-router'
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

function App() {


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
      <Route path='/rejestracja' element={<Rejestracja></Rejestracja>}></Route>
      <Route path='/cennik' element={<Cennik></Cennik>}></Route>
      <Route path='/diagnostyka' element={<Diagnostyka></Diagnostyka>}></Route>
      <Route path='/nfz' element={<Nfz></Nfz>}></Route>
      <Route path='/rehabilitacja' element={<Rehabilitacja></Rehabilitacja>}></Route>
      <Route path='/fizio' element={<Fizio></Fizio>}></Route>
      <Route path='/masaz' element={<Masaz></Masaz>}></Route>
      <Route path='/solux' element={<Solux></Solux>}></Route>
    
    </Routes>
      
      
      
    </div>


  
  )
}

export default App;
