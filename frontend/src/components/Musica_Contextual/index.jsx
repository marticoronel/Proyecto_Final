import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

const MusicaContextual = () => {
  const [generos, setGeneros] = useState([]);
  const [selectedGeneros, setSelectedGeneros] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [ocasiones, setOcasiones] = useState([]);
  const [selectedOcasion, setSelectedOcasion] = useState('');

  const [clima, setClima] = useState([]);
  const [selectedClima, setSelectedClima] = useState('');

  const [estados, setEstados] = useState([]);
  const [selectedEstado, setSelectedEstado] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/musica_contextual/generos')
      .then(response => response.json())
      .then(data => setGeneros(data))
      .catch(error => console.error('Error al obtener los géneros:', error));

    fetch('http://localhost:3000/musica_contextual/ocasiones')
      .then(response => response.json())
      .then(data => setOcasiones(data))
      .catch(error => console.error('Error al obtener las ocasiones:', error));

    fetch('http://localhost:3000/musica_contextual/clima')
      .then(response => response.json())
      .then(data => setClima(data))
      .catch(error => console.error('Error al obtener el clima:', error));

    fetch('http://localhost:3000/musica_contextual/estados_animo')
      .then(response => response.json())
      .then(data => setEstados(data))
      .catch(error => console.error('Error al obtener el estado:', error));
  }, []);

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
      body: JSON.stringify({ generos: selectedGeneros, ocasion: selectedOcasion }),
    })
      .then(response => response.json())
      .then(data => {
        setPlaylist(data);
        localStorage.setItem('selectedGeneros', JSON.stringify(selectedGeneros));
        navigate('/playlist_contextual');
      })
      .catch(error => console.error('Error al obtener la playlist:', error));
  };

  return (
    <div className={styles.body}>
      <div className={styles.login_header}>
        <button className={styles.btn_arrow} onClick={() => navigate('/home')}>
          <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
        </button>
        <h2 className={styles.heading_5}>Música Contextual</h2>
      </div>
      <div className={styles.input_header_ocasion}>
        <label className={`${styles.heading_4} ${styles.ocasiones}`} htmlFor="ocasion">¿Cuál es la ocasión?</label>
        <select
          id="ocasion"
          value={selectedOcasion}
          onChange={(e) => setSelectedOcasion(e.target.value)}
          className={`${styles.input} ${styles.input_ocasion}`}
        >
          <option value="" disabled>Selecciona una ocasión</option>
          {ocasiones.map(ocasion => (
            <option key={ocasion.id} value={ocasion.nombre_actividad}>
              {ocasion.nombre_actividad}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.input_header_sientes}>
        <label className={`${styles.heading_4} ${styles.sientes}`} htmlFor="estado">¿Cómo te sientes?</label>
        <select
          id="estado"
          value={selectedEstado}
          onChange={(e) => setSelectedEstado(e.target.value)}
          className={`${styles.input} ${styles.input_estado}`}
        >
          <option value="" disabled>Elije una opción</option>
          {estados.map(estado => (
            <option key={estado.id} value={estado.estado_animo}>
              {estado.estado_animo}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.input_header_clima}>
        <label className={`${styles.heading_4} ${styles.ocasiones}`} htmlFor="clima">¿Cómo está el clima?</label>
        <select
          id="clima"
          value={selectedClima}
          onChange={(e) => setSelectedClima(e.target.value)}
          className={`${styles.input} ${styles.input_ocasion}`}
        >
          <option value="" disabled>Elije una opción</option>
          {clima.map(clima => (
            <option key={clima.id} value={clima.tipo_clima}>
              {clima.tipo_clima}
            </option>
          ))}
        </select>
      </div>
      <h2 className={`${styles.heading_4} ${styles.generos}`}>Selecciona hasta 3 géneros:</h2>
      <div>
        {generos.length > 0 ? (
          <div className={`${styles.container} ${styles.grid_container}`}>
            {generos.map(genero => (
              <button
                className={`${styles.btn} ${selectedGeneros.includes(genero.id) ? styles.selected : ''}`}
                key={genero.id}
                onClick={() => handleGeneroClick(genero)}
              >
                {genero.nombre_genero}
              </button>
            ))}
          </div>
        ) : (
          <img src="/public/imgs/playlist/cargando.svg" alt="" />
        )}
      </div>
      <div>
        <button className={`${styles.btn_standard} ${styles.btn_standard_texto}`} onClick={handleCrearPlaylist}>Crear Playlist</button>
      </div>
    </div>
  );
};

export default MusicaContextual;
