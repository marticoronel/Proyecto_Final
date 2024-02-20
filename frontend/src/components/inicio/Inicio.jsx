import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './VideoInicio';
import Button from '../botones/BotonGeneral';
import styles from './boton.module.css';

export default function inicio() {
    const navigate = useNavigate();

    const handleIniciarSesionClick = () => {
        navigate('/login');
    };

    const handleRegistrarseClick = () => {
        navigate('/ingreso_email');
    };

    return (
        <>

            <img className={styles.logo} src="/public/imgs/login_registrar_IMGS/logo.svg" alt="" />

            <p className={styles.texto}>Música a medida.</p>

            <VideoBackground />

            <Button className={styles.btnregistrarse} onClick={handleRegistrarseClick}>

                <p className={styles.registrarse}>Registrarse Gratis</p>
            </Button>

            <Button className={styles.btncontinuarconGoogle}>
                <img className={styles.google} src="/public/imgs/login_registrar_IMGS/google.svg" alt="" />
                <p className={styles.continuarconGoogle} >Continuar con Google</p>
            </Button>

            <Button className={styles.btncontinuarconApple}>
                <img className={styles.apple} src="/public/imgs/login_registrar_IMGS/mac.svg" alt="" />
                <p className={styles.continuarconApple}>Continuar con Apple</p>
            </Button>

            <Button className={styles.btniniciarSesion} onClick={handleIniciarSesionClick}>

                <p className={styles.iniciarSesion}>Iniciar Sesión</p>
            </Button>
        </>
    )
}


