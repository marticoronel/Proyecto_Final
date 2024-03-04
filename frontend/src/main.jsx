import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import Login from './components/Login';
import RecuperarContrasena from './components/RecuperarContrasena';
import NombreUsuario from './components/NombreUsuario';
import Registrarse from './components/Registrarse';
import Home from './components/Home';
import Buscar from './components/Buscar';
import Perfil from './components/Perfil';
import Amigos from './components/Amigos';
import Cupido_Musical from './components/Cupido_Musical';
import Musica_Contextual from './components/Musica_Contextual';
import Playlist_Contextual from './components/PlaylistContextual';
import Playlist_Cupido_Musical from './components/PlaylistCupidoMusical';
import ComponentePrueba from './components/PlaylistCupidoMusical/ComponentePrueba';
import Buscartop10 from './components/Buscartop10';


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
    path: '/playlist_contextual',
    element: <Playlist_Contextual />,
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
  {
    path: '/playlist_cupido_musical',
    element: <Playlist_Cupido_Musical />,
  },
  {
    path: '/componente_prueba',
    element: <ComponentePrueba />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
