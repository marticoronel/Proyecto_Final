import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio/Inicio.jsx';
import Login from './components/Login/index.jsx';
import RecuperarContrasena from './components/RecuperarContrasena/index.jsx';
import Registrarse from './components/Registrarse/index.jsx';
import NombreUsuario from './components/NombreUsuario/index.jsx';
import Home from './components/Home/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar_contrasena" element={<RecuperarContrasena />} />
        <Route path="/ingreso_email" element={<Registrarse />} />
        <Route path="/registrarse" element={<NombreUsuario />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
