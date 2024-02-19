import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import Footer from '../Footer/index';

export default function Home() {
    const navigate = useNavigate();
    const [showIconInicio, setShowIconInicio] = useState(false);
    const [showIconBuscar, setShowIconBuscar] = useState(false);
    const [showIconPerfil, setShowIconPerfil] = useState(false);
    const [showIconAmigos, setShowIconAmigos] = useState(false);


    const visibilidadIconInicio = () => {
        setShowIconInicio((prevShowIconInicio) => !prevShowIconInicio);
    };
    const visibilidadIconBuscar = () => {
        setShowIconBuscar((prevShowIconBuscar) => !prevShowIconBuscar);
    };
    const visibilidadIconPerfil = () => {
        setShowIconPerfil((prevShowIconPerfil) => !prevShowIconPerfil);
    };
    const visibilidadIconAmigos = () => {
        setShowIconAmigos((prevShowIconAmigos) => !prevShowIconAmigos);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.header_MusicaYa} ${styles.heading_3}`}>
                <div className={styles.headerMusicaYa}>Música ya</div>
                <div className={styles.logos_header}>
                    <img src="../../../public/imgs/login_registrar_IMGS/reloj.png" alt="icono reloj" />
                    <img src="../../../public/imgs/login_registrar_IMGS/campana.png" alt="icono campana" />
                </div>
            </div>
            <div className={styles.menu_musical}>
                <button className={styles.btn_musical} onClick={() => navigate('/cupido_musical')}>
                    <img className={styles.foto_musical} src="../../../public/imgs/login_registrar_IMGS/cupido.png" alt="" />
                    <div className={styles.opciones_musical}>
                        <span className={styles.bodyBodyVerySmall_14}>Cupido Musical</span>
                        <samp className={styles.bodyBodyVerySmall_12}>Tus artistas favoritos nunca van a dejarte con el corazón roto.</samp>
                    </div>
                </button>
                <button className={styles.btn_musical} onClick={() => navigate('/musica_contextual')}>
                    <img className={styles.foto_musical} src="../../../public/imgs/login_registrar_IMGS/contextual.png" alt="" />
                    <div className={styles.opciones_musical}>
                        <span className={styles.bodyBodyVerySmall_14}>Música Contextual</span>
                        <samp className={styles.bodyBodyVerySmall_12}>Creamos la playlist perfecta para cualquier situación.</samp>
                    </div>
                </button>
            </div>
            < Footer />
        </div>);
};
