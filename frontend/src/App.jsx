import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio/Inicio.jsx';
import Login from './components/Login/index.jsx';
import RecuperarContrasena from './components/RecuperarContrasena/index.jsx';
import Registrarse from './components/Registrarse/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar_contrasena" element={<RecuperarContrasena />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/registrarse/nombre_usuario" element={<NombreUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
