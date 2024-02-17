import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio/Inicio.jsx';
import Login from './components/Login/index.jsx';
import RecuperarContrasena from './components/RecuperarContrasena/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar_contrasena" element={<RecuperarContrasena />} />
      </Routes>
    </Router>
  );
}

export default App;
