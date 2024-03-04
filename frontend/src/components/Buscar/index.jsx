import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import BuscadorItem from '../BuscadorItem';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";
import lupaIcon from "../../../public/imgs/login_registrar_IMGS/footer_search_claro.png";
import Buscartop10 from '../Buscartop10';
import Footer from "../Footer";

const Buscar = () => {
    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);
    const [topArtistas, setTopArtistas] = useState([]);
    const [inputVacio, setInputVacio] = useState(true); // Nuevo estado para controlar si el input está vacío
    const navigate = useNavigate();

    const handleInputChange = async (e) => {
        const nuevoValor = e.target.value;
        setBusqueda(nuevoValor);

        try {
            if (nuevoValor.trim() === '') {
                setResultados([]);
                setInputVacio(true); // El input está vacío
            } else {
                const response = await fetch(`http://localhost:3000/buscar?nombre=${nuevoValor}`);
                const data = await response.json();
                setResultados(data);
                setInputVacio(false); // El input no está vacío
            }
        } catch (error) {
            console.error('Error al buscar:', error);
        }
    };

    const fetchTopArtistas = async () => {
        try {
            const response = await fetch("http://localhost:3000/top10artistas");
            const data = await response.json();
            setTopArtistas(data);
        } catch (error) {
            console.error('Error al obtener los 10 artistas:', error);
        }
    };

    useEffect(() => {
        fetchTopArtistas();
    }, []);

    const quitarCancion = (id) => {
        const nuevasCanciones = resultados.filter(cancion => cancion.id !== id);
        setResultados(nuevasCanciones);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.login_header}>
                    <button className={styles.btn_arrow} onClick={() => navigate('/home')}>
                        <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                    </button>
                    <h2 className={styles.heading_4}>Buscador</h2>
                </div>
                <div className={styles.inputContainer}>
                    <img className={styles.lupaIcon} src={lupaIcon} alt="Icono de lupa" />
                    <input
                        type="text"
                        id="estado"
                        value={busqueda}
                        onChange={handleInputChange}
                        className={styles.input_buscador}
                        placeholder="¿Qué deseas escuchar?"
                    />
                </div>

                {inputVacio ? (
                    // Renderizar Buscartop10 si el input está vacío
                    <Buscartop10 topArtistas={topArtistas} />
                ) : (
                    // Renderizar BuscadorItem si el input no está vacío
                    <BuscadorItem
                        canciones={resultados}
                        busqueda={busqueda}
                        handleInputChange={handleInputChange}
                        quitarCancion={quitarCancion}
                    />
                )}

                <Footer className={styles.footer} />
            </div>
        </>
    );
};

export default Buscar;
