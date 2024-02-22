import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";
import Button from "../botones/BotonGeneral";
import BotonCorazon from "../botones/BotonCorazon";
import BotonEquix from "../botones/BotonEquix";
import ImagenAutor from "../Portadas/ImagenAutor";


export default function Cupido_Musical() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.login_header}>
                    <button className={styles.btn_arrow} onClick={() => navigate('/home')}>
                        <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atras" />
                    </button>
                    <h2 className={styles.heading_5}>Cupido Musical</h2>

                </div>
            </div>
            <ImagenAutor className={styles.img_autor}></ImagenAutor>
            <Button className={styles.btn_crearPlayList}>Crear Playlist</Button>
            <BotonCorazon className={styles.btn_corazon}></BotonCorazon>
            <BotonEquix className={styles.btn_equix}></BotonEquix>
        </>
    );
};