import './App.css';
import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Header/>
     <h1> E-Commerce</h1>
    </BrowserRouter>
    </div>
  );
}

export default App;
