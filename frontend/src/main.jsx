import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/inicio/Inicio';
import RecuperarContrasena from './components/RecuperarContrasena';

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
    path: '/registrar',
    element: <div>Registro</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
