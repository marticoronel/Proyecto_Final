import React from 'react';
import styles from './styles.module.css';

const BuscadorItem = ({ canciones, busqueda, quitarCancion }) => {
  const filteredCanciones = busqueda
    ? canciones.filter(item => {
      const nombreCancion = item.nombre_cancion || item.nombre || '';
      const nombreCantante = item.nombre_cantante || item.nombreCantante || 'Desconocido';

      return (
        nombreCancion.toLowerCase().includes(busqueda.toLowerCase()) ||
        nombreCantante.toLowerCase().includes(busqueda.toLowerCase())
      );
    })
    : [];

  return (
    <div className={styles.body}>
      <ul className={styles.cancion_list}>
        {filteredCanciones.map((item, index) => (
          <li key={index} className={styles.cancion_list}>
            <div className={styles.cancion_container}>
              <img
                className={styles.album_cover}
                src={`/tapa_disco/${item.tapaCantante || item.tapa_disco || 'default.jpg'}`}
                alt="Tapa del Disco o del Cantante"
              />
              <div className={styles.song_texts}>
                <div className={styles.song_details}>
                  <span className={styles.bodyBodyVerySmall_14}>{item.nombre_cancion || item.nombre || 'Desconocido'}</span><br />
                  <span className={styles.bodyBodyVerySmall_12}>{item.tipo === 'cancion' ? 'Canción' : 'Cantante'} | </span>
                  <span className={styles.bodyBodyVerySmall_12}>{item.nombre_cantante || item.nombreCantante || 'Desconocido'}</span>
                </div>
              </div>
              <div>
                <button className={styles.quitar_button} onClick={() => quitarCancion(item.id)}>
                  <img className={styles.cruz} src='../../public/imgs/playlist/cross.png' alt="puntos en linea" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscadorItem;
