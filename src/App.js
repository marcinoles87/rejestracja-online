
import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes,Route,Link} from 'react-router'


function App() {


  


  return (

    <div className="container">

    <Routes>
      

      <Route path='*' element={
        <>  
        
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </>
     
 
      }/>

      
      
  
    
    </Routes>
      
      
      
    </div>


  
  )
}

export default App;
