import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CancionItem from '../CancionItem';
import { useNavigate } from "react-router-dom";


import styles from './styles.module.css';

import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

import Footer from "../Footer";

import Collage_albums from "../Collage_albums";

export default function ComponentePrueba() {
    const [cantantes, setCantantes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarCantantesDePrueba = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cupido_musical/cantantes/prueba', {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                // Manejar la respuesta y establecer el estado de los cantantes
                setCantantes(response.data);
            } catch (error) {
                console.error('Error al obtener los cantantes:', error);
            }
        }
        cargarCantantesDePrueba();
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/home')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                </button>
                <h2 className={styles.heading_5}>Cupido Musical</h2>
            </div>
                < Collage_albums className={styles.collage} />
                <div className={styles.icons}>
                    <div className={styles.left_icons}>
                        <img className={styles.a_icon} src='../../public/imgs/playlist/a_icon.png' alt="compartir" />
                        <img className={styles.tick} src='../../public/imgs/playlist/tick.png' alt="me gusta" />
                        <img className={styles.shear} src='../../public/imgs/playlist/compartir.png' alt="puntos en linea" />
                    </div>
                    <div className={styles.right_icons}>
                        <div className={`${styles.duracion} ${styles.Body_Very_Small_12px_Regular}`}>1h 17m</div>
                        <img className={styles.reloj} src='../../public/imgs/playlist/reloj.png' alt="" />
                    </div>
                </div>
                <div className={styles.playIcons}>
                    <div className={styles.left_icons_2}>
                        <img className={styles.copia} src='../../public/imgs/playlist/copia.png' alt="" />
                        <div className={`${styles.heading_5} ${styles.copia_text}`}>Crear Copia</div>
                    </div>
                    <div className={styles.right_icons}>
                        <img className={styles.flechas} src='../../public/imgs/playlist/flechas.png' alt="" />
                        <img className={styles.play} src='../../public/imgs/playlist/play.png' alt="" />
                    </div>
                </div>
                <ul>
                    {Array.isArray(cantantes) && cantantes.map((cantante, index) => (
                        <>
                            <CancionItem cancion={cantante} />
                        </>
                    ))}
                </ul>
                <Footer className={styles.footer} />
            </div>
        </div>
    );
}
