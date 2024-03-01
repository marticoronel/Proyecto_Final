import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import axios from 'axios';
import Button from "../botones/BotonGeneral";
import BotonCorazon from "../botones/BotonCorazon";
import BotonEquix from "../botones/BotonEquix";

export default function Cupido_Musical() {
  const navigate = useNavigate();
  const [cantantes, setCantantes] = useState([]);
  const [indiceCantanteActual, setIndiceCantanteActual] = useState(0);
  const [selectedCantantes, setSelectedCantantes] = useState([]);
  const [siguienteCantante, setSiguienteCantante] = useState(null);

  useEffect(() => {
    const obtenerCantantes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cupido_musical/cantantes/soloCantantes');
        setCantantes(response.data);
      } catch (error) {
        console.error('Error al obtener los cantantes:', error);
      }
    };

    obtenerCantantes();
  }, []);

  useEffect(() => {
    // Calcular el siguiente cantante en la lista
    const siguienteIndex = (indiceCantanteActual + 1) % cantantes.length;
    setSiguienteCantante(cantantes[siguienteIndex]);
  }, [indiceCantanteActual, cantantes]);

  const mostrarSiguienteCantante = () => {
    setIndiceCantanteActual(prevIndice => (prevIndice + 1) % cantantes.length);
  };

  const agregarCantanteAPlaylist = () => {
    const cantanteActual = cantantes[indiceCantanteActual];
    setSelectedCantantes(prevSelectedCantantes => [...prevSelectedCantantes, cantanteActual]);
  };

  const guardarPlaylistEnBaseDeDatos = async () => {
    try {
      // Realiza una solicitud para guardar la lista de cantantes en la base de datos
      await axios.post('http://localhost:3000/cupido_musical/playlist', selectedCantantes);
      // Limpiar la lista de cantantes seleccionados después de guardarlos en la base de datos
      setSelectedCantantes([]);
    } catch (error) {
      console.error('Error al guardar la playlist en la base de datos:', error);
    }
  };

  return (
    <div>
      {cantantes.length > 0 ? (
        <div className={styles.container}>

          <img className={styles.tapa_disco} src={`/tapa_cantante/${cantantes[indiceCantanteActual].tapa_cantante}`} alt="" />

          <p className={styles.nombre_cantante}> {cantantes[indiceCantanteActual].nombre_cantante}</p>

          {siguienteCantante && (
            <img className={styles.siguiente_tapa_disco} src={`/tapa_cantante/${siguienteCantante.tapa_cantante}`} alt="Siguiente Cantante" />
          )}

          <Button onClick={guardarPlaylistEnBaseDeDatos} className={styles.btn_crearPlayList}>Crear Playlist</Button>

          <BotonCorazon onClick={() => { mostrarSiguienteCantante(); agregarCantanteAPlaylist(); }} className={styles.btn_corazon}></BotonCorazon>

          <BotonEquix onClick={mostrarSiguienteCantante} className={styles.btn_equix}></BotonEquix>
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
