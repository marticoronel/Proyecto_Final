import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import Footer from "../Footer";

export default function Perfil() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.foto_perfil} src="../../../public/imgs/foto_perfil.png" alt="" />
                <button className={styles.container_rueda} onClick={() => navigate('/editar_perfil')}>
                    <img className={styles.rueda} src="../../../public/imgs/login_registrar_IMGS/rueda_configuracion.png" alt="rueda de engranaje" />
                </button>
            </div>
            <div className={`${styles.userName} ${styles.heading_3}`}>El Negro Tecla 🍻</div>
            <div className={styles.bodyBodyVerySmall_14}>@negro_tecla</div>
            <div className={styles.bodyBodyVerySmall_14}>@negro_tecla</div>

            <Footer />
        </div >
    );
};

