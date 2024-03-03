import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import Footer from "../Footer";

const Buscar = () => {
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);

    const handleInputChange = async (e) => {
        const nuevoValor = e.target.value;
        setBusqueda(nuevoValor);

        try {
            const response = await fetch(`http://localhost:3000/buscar?nombre=${nuevoValor}`);
            const data = await response.json();
            setResultados(data);
        } catch (error) {
            console.error('Error al buscar:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div >
                <div className={`${styles.heading_3} ${styles.header}`}>Buscador</div>
            </div>
            <div className={styles.input_header_buscador}>
                <input
                    type="text"
                    id="estado"
                    value={busqueda}
                    onChange={handleInputChange}
                    className={`${styles.input} ${styles.input_estado}`}
                    placeholder="Buscar..."
                />
            </div>
            <div>
                <ul>
                    {resultados.map((resultado) => (
                        <li key={resultado.id}>
                            {resultado.tipo === 'cancion' ? (
                                <p>{`Canción: ${resultado.nombre}`}</p>
                            ) : (
                                <p>{`Músico: ${resultado.nombre}`}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Buscar;
