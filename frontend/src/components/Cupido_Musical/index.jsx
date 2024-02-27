import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import axios from 'axios';

export default function Cupido_Musical() {
    const navigate = useNavigate();
    const [primerCantante, setPrimerCantante] = useState(null);

    useEffect(() => {
        const obtenerPrimerCantante = async () => {
            try {
              const response = await axios.get('http://localhost:3000/cupido_musical/cantantes/primero');
              setPrimerCantante(response.data);
            } catch (error) {
              console.error('Error al obtener el primer cantante:', error);
            }
          };
      
          obtenerPrimerCantante();
    }, []);

    return (
        <div>
          <h2>Información del Primer Cantante:</h2>
          {primerCantante ? (
            <div>
              <p>ID del Cantante: {primerCantante.id_cantante}</p>
              <p>Nombre del Cantante: {primerCantante.nombre_cantante}</p>
              <p>ID del Disco: {primerCantante.id_disco}</p>
              <p>Nombre del Disco: {primerCantante.nombre_disco}</p>
              <img className={styles.tapa_disco} src={`/tapa_disco/${primerCantante.tapa_disco}`} alt="" />
              <p>URL de la Tapa del Disco: {primerCantante.tapa_disco}</p>
              <p>ID de la Canción: {primerCantante.id_cancion}</p>
              <p>Nombre de la Canción: {primerCantante.nombre_cancion}</p>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      );
};
