import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/inicio/Inicio';
import RecuperarContrasena from './components/RecuperarContrasena';
import NombreUsuario from './components/NombreUsuario';
import Registrarse from './components/Registrarse';
import Home from './components/Home';
import Buscar from './components/Buscar';
import Perfil from './components/Perfil';
import Amigos from './components/Amigos';
import Cupido_Musical from './components/Cupido_Musical';
import Musica_Contextual from './components/Musica_Contextual';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/recuperar_contrasena',
    element: <RecuperarContrasena />,
  },
  {
    path: '/ingreso_email',
    element: <Registrarse />,
  },
  {
    path: '/registrarse',
    element: <NombreUsuario />,
  },
  {
    path: '/cupido_musical',
    element: <Cupido_Musical />,
  },
  {
    path: '/musica_contextual',
    element: <Musica_Contextual />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/buscar',
    element: <Buscar />,
  },
  {
    path: '/perfil',
    element: <Perfil />,
  },
  {
    path: '/amigos',
    element: <Amigos />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
