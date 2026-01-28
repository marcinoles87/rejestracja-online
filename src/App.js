
import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {


  


  return (

    <div className="container">

      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
      
      
    </div>


  
  )
}

export default App;
