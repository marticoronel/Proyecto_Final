import React from 'react';
import styles from './styles.module.css';


const CancionItem = ({ cancion }) => {
  return (
    <div>
      <li className={styles.body}>
        <div className={styles.cancion_container}>
          <img className={styles.album_cover} src={`/tapa_disco/${cancion.tapa_disco}`} alt="Tapa del Disco" />
          <div className={styles.song_details}>
            <span className={styles.Body_Small_14px_Medium}>{cancion.nombre_cancion}</span>
            <span className={styles.Body_Very_Small_12px_Regular}>{cancion.nombre_cantante}</span>
          </div>
          <div className={styles.vertical_dots}><img src='../../public/imgs/login_registrar_IMGS/puntosLinea.svg' alt="puntos en linea" /></div>
        </div>
      </li>
    </div>
  );
};

export default CancionItem;