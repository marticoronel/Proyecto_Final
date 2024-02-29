import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MusicaContextual = () => {
  const [generos, setGeneros] = useState([]);
  const [selectedGeneros, setSelectedGeneros] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/musica_contextual/generos')
      .then(response => response.json())
      .then(data => setGeneros(data))
      .catch(error => console.error('Error al obtener los géneros:', error));
  }, []);

  useEffect(() => {
    console.log('Selected Generos:', selectedGeneros);
  }, [selectedGeneros]);

  const handleGeneroClick = genero => {
    setSelectedGeneros(prevSelectedGeneros => {
      if (prevSelectedGeneros.includes(genero.id)) {
        return prevSelectedGeneros.filter(item => item !== genero.id);
      } else {
        if (prevSelectedGeneros.length < 3) {
          return [...prevSelectedGeneros, genero.id];
        } else {
          alert('Seleccionar hasta 3 géneros.');
          return prevSelectedGeneros;
        }
      }
    });
  };

  const handleCrearPlaylist = () => {
    fetch('http://localhost:3000/musica_contextual/playlist_contextual', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ generos: selectedGeneros }),
    })
      .then(response => response.json())
      .then(data => {
        setPlaylist(data);

        localStorage.setItem('selectedGeneros', JSON.stringify(selectedGeneros));

        // navigate('/playlist_contextual');
      })
      .catch(error => console.error('Error al obtener la playlist:', error));
  };

  return (
    <div>
      <h2>Selecciona hasta 3 géneros:</h2>
      <div>
        {generos.length > 0 ? (
          <div>
            {generos.map(genero => (
              <button
                key={genero.id}
                onClick={() => handleGeneroClick(genero)}
                style={{ backgroundColor: selectedGeneros.includes(genero.id) ? '#00f' : '#fff' }}
              >
                {genero.nombre_genero}
              </button>
            ))}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>

      {selectedGeneros.length > 0 && (
        <div>
          <button onClick={handleCrearPlaylist}>Crear Playlist</button>
        </div>
      )}
    </div>
  );
};

export default MusicaContextual;
