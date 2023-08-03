import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Header/>
    <Routes>
      
      <Route element={<PrivateComponent/>}>
      <Route path='/' element ={<h1> Product Listing Component</h1>}/>
      <Route path='/add' element ={<AddProduct/>}/>
      <Route path='/update' element ={<h1> Update Product Component</h1>}/>
      <Route path='/logout' element ={<h1> Logout Component</h1>}/>
      <Route path='/profile' element ={<h1> Profile Component</h1>}/>
      </Route>

      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
