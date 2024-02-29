import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaylistContextual = () => {
  const [canciones, setCanciones] = useState([]);
  // const [generosSeleccionados, setGenerosSeleccionados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedGeneros = JSON.parse(localStorage.getItem('selectedGeneros'));
    // setGenerosSeleccionados(selectedGeneros);
    
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
      <ul>
        {canciones.length > 0 ? (
          canciones.map((cancion, index) => (
            <li key={index}>{cancion.nombre_cancion}</li>
          ))
        ) : (
          <p>No hay canciones disponibles.</p>
        )}
      </ul>

      <button onClick={() => navigate('/musica_contextual')}>Volver</button>
    </div>
  );
};

export default PlaylistContextual;
