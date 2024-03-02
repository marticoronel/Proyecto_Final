import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CancionItem from '../CancionItem';
import styles from './styles.module.css';

const PlaylistContextual = () => {
  const [canciones, setCanciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedGeneros = JSON.parse(localStorage.getItem('selectedGeneros'));
    
    fetch('http://localhost:3000/musica_contextual/playlist_contextual', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ generos: selectedGeneros }),
    })
      .then(response => response.json())
      .then(data => setCanciones(data))
      .catch(error => console.error('Error al obtener las canciones:', error));
  }, []);

  return (
    <div>
      <h2>Canciones de la Playlist:</h2>
      <ul>
        {canciones.length > 0 ? (
          canciones.map((cancion, index) => (
            <CancionItem key={index} cancion={cancion} />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </ul>
      <button onClick={() => navigate('/musica_contextual')}>Volver</button>
    </div>
  );
};

export default PlaylistContextual;
