
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


      
      
  
    
    </Routes>
      
      
      
    </div>


  
  )
}

export default App;
