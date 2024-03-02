import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const CuadradoFotos = () => {
    const [tapasDiscos, setTapasDiscos] = useState([]);

    useEffect(() => {
        const obtenerTapasDiscos = async () => {
            try {
                const response = await fetch('http://localhost:3000/musica_contextual/discos');
                const data = await response.json();

                console.log('Respuesta del servidor:', data);

                // Verificar si data es una matriz antes de establecerla
                if (Array.isArray(data)) {
                    setTapasDiscos(data);
                } else {
                    console.error('La respuesta del servidor no es una matriz:', data);
                }
            } catch (error) {
                console.error('Error al obtener tapas de discos:', error);
            }
        };

        obtenerTapasDiscos();
    }, []);

    return (
        <div className={styles.cuadrado_fotos}>
            <div className={styles.cuadrado_contenedor}>
                {Array.isArray(tapasDiscos) && tapasDiscos.length === 4 ? (
                    tapasDiscos.map((tapa, index) => (
                        <img
                            key={index}
                            className={styles[`imagen_${index + 1}`]}
                            src={`/tapa_disco/${tapa}`}
                            alt={`Disco ${index + 1}`}
                        />
                    ))
                ) : (
                    <p>Cargando tapas de discos...</p>
                )}
            </div>
        </div>
    );
};

export default CuadradoFotos;
