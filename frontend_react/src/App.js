import React from 'react'
import './App.scss'
import {About,Skills,Header,Footer,Work} from './container'
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
    <Navbar/>    
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
