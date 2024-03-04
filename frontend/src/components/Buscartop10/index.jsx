import React from 'react';
import styles from './styles.module.css';

const Buscartop10 = () => {
  const topArtistas = [
    { nombre_cantante: 'buitres', tapa_cantante: 'buitrez.jpg' },
    { nombre_cantante: 'karibe con k', tapa_cantante: 'karibeconk.jpg' },
    { nombre_cantante: 'ruben rada', tapa_cantante: 'rubenrada.jpg' },
    { nombre_cantante: 'shakira', tapa_cantante: 'shakira.jpg' },
    { nombre_cantante: 'rosalia', tapa_cantante: 'rosalia.jpg' },
    { nombre_cantante: 'luana', tapa_cantante: 'luana.jpg' },
    { nombre_cantante: 'rolling stones', tapa_cantante: 'rollingstone.jpg' },
    { nombre_cantante: 'silk sonic', tapa_cantante: 'silksonic.jpg' },
    { nombre_cantante: 'tribalistas', tapa_cantante: 'tribalistas.jpg' },
    { nombre_cantante: 'larbanois-carrero', tapa_cantante: 'larbanois.jpg' },
  ];

  return (
    <div className={styles.body}>
      <h2 className={styles.top10}>Top 10</h2>
      <ul className={styles.cancion_list}>
        {topArtistas.map((musico, index) => (
          <li key={index} className={styles.cancion_list}>
            <div className={styles.cancion_container}>
              <img
                className={styles.album_cover}
                src={`/tapa_cantante/${musico.tapa_cantante || 'default.jpg'}`}
                alt="Tapa del Cantante"
              />
              <div className={styles.song_texts}>
                <div className={styles.song_details}>
                  <span className={styles.bodyBodyVerySmall_14}>{musico.nombre_cantante || 'Desconocido'}</span><br />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buscartop10;
