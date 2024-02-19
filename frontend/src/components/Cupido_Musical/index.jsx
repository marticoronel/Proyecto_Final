import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";


export default function Cupido_Musical() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/home')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atras" />
                </button>
                <h2 className={styles.heading_5}>Cupido Musical</h2>
            </div>
        </div>

    );
};