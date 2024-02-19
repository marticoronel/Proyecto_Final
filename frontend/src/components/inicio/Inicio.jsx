import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './VideoInicio';
import Button from '../botones/BotonGeneral';
import styles from './boton.module.css';

export default function inicio() {
    const navigate = useNavigate();

    const buttonStyle = {

        backgroundColor: '#FF8E0A',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1,
        width: '80%',
        borderTopRightRadius: '16px',
        borderBottomLeftRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '500px  auto auto',
        height: '48px'
    };

    const buttonStyleGoogle = {
        backgroundColor: 'white',
        borderTopRightRadius: '16px',
        borderBottomLeftRadius: '16px',
        padding: '10px 20px',
        width: '80%',
        border: '2px solid black',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto auto',
        height: '48px',
    }

    const buttonStyleApple = {
        borderTopRightRadius: '16px',
        borderBottomLeftRadius: '16px',
        border: '2px solid black',
        width: '80%',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto auto',
        height: '48px',
    }

    const buttonStyleIniciarSesion = {
        borderTopRightRadius: '16px',
        borderBottomLeftRadius: '16px',
        cursor: 'pointer',
        width: '80%',
        border: 'none',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto auto',
        height: '48px',
    }

    const handleIniciarSesionClick = () => {
        navigate('/login');
    };

    const handleRegistrarseClick = () => {
        navigate('/registrarse');
    };

    return (
        <>
<<<<<<< HEAD
            <img className={styles.logo} src="/public/imgs/login_registrar_IMGS/logo.svg" alt="" />
            <p className={styles.texto}>Música a medida.</p>
            <VideoBackground />
            <Button style={buttonStyle} >Registrarse Gratis</Button>
=======
            {/* <VideoBackground /> */}
            <Button style={buttonStyle} onClick={handleRegistrarseClick}>
                Registrarse Gratis
            </Button>
            <Button style={buttonStyleGoogle}>Continuar con Google</Button>
            <Button style={buttonStyleApple}>Continuar con Apple</Button>
            <Button style={buttonStyleIniciarSesion} onClick={handleIniciarSesionClick}>
                Iniciar Sesión
            </Button>
        </>
    )
}


