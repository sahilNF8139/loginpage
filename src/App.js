import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';
// import { Link } from 'react-router-dom';

function App() {
  
  return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
       </BrowserRouter>
     
   </div>
  );
}

export default App;
