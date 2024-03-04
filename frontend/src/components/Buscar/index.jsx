import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importa useNavigate desde react-router-dom
import styles from './styles.module.css';
import BuscadorItem from '../BuscadorItem'; 
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

const Buscar = () => {
    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);
    const navigate = useNavigate();  // Usa useNavigate para obtener la función navigate
    
    const handleInputChange = async (e) => {
        const nuevoValor = e.target.value;
        setBusqueda(nuevoValor);

        try {
            if (nuevoValor.trim() === '') {
                setResultados([]);
            } else {
                const response = await fetch(`http://localhost:3000/buscar?nombre=${nuevoValor}`);
                const data = await response.json();
                setResultados(data);
            }
        } catch (error) {
            console.error('Error al buscar:', error);
        }
    };

    const quitarCancion = (id) => {
        const nuevasCanciones = resultados.filter(cancion => cancion.id !== id);
        setResultados(nuevasCanciones);
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/home')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                </button>
                <h2 className={styles.heading_4}>Buscador</h2>
            </div>
            <div>
                <input
                    type="text"
                    id="estado"
                    value={busqueda}
                    onChange={handleInputChange}
                    className={styles.input_buscador}
                />
            </div>
            <BuscadorItem
                canciones={resultados}
                busqueda={busqueda}
                handleInputChange={handleInputChange}
                quitarCancion={quitarCancion} 
            />
        </div>
    );
};

export default Buscar;
