import React,{useState} from 'react';
import './App.css';
import './Props.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from './Components/Home';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Products from './Components/Products';
import Sell from './Components/Sell';
import Login from './Components/Login';


function App() {

  return (

    
   
    <BrowserRouter>
    <Header />
    <Routes>


        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/items/:id" element={<Products />} />
        <Route path="/sell" element={<Sell/>}/>
        
        
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
