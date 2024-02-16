import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css'
import Inicio from './components/inicio/Inicio.jsx'
import Login from './components/Login/index.jsx' 


function App() {
  return (
    <>
      {/* <Inicio /> */}
      <Login />
    </>
  )
}

export default App
