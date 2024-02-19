import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

export default function Footer() {
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

    const handleButtonClickInicio = () => {
        navigate("/");
        visibilidadIconInicio();
    }

    const handleButtonClickBuscar = () => {
        navigate("/buscar");
        visibilidadIconBuscar();
    }

    const handleButtonClickPerfil = () => {
        navigate("/perfil");
        visibilidadIconPerfil();
    }

    const handleButtonClickAmigos = () => {
        navigate("/amigos");
        visibilidadIconAmigos();
    }

    return (
        <div className={styles.footer}>
            <button className={styles.btn_footer} type="button" onClick={() => handleButtonClickInicio()}>
                {showIconInicio ? (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_home.png" alt="icono de una casa" />
                ) : (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_home_claro.png" alt="icono de una casa" />
                )}
                <div className={styles.texto_footer}>
                    <span className={styles.bodyBodyVerySmall_12_clara}>Inicio</span>
                </div>
            </button>
            <button className={styles.btn_footer} type="button" onClick={() => handleButtonClickBuscar()}>
                {showIconBuscar ? (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_search.png" alt="icono de una lupa" />
                ) : (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_search_claro.png" alt="icono de una lupa" />
                )}
                <div className={styles.texto_footer}>
                    <span className={styles.bodyBodyVerySmall_12_clara}>Buscador</span>
                </div>
            </button>
            <button className={styles.btn_footer} type="button" onClick={() => handleButtonClickPerfil()}>
                {showIconPerfil ? (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_perfil.png" alt="icono de una persona" />
                ) : (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_perfil_claro.png" alt="icono de una persona" />
                )}
                <div className={styles.texto_footer}>
                    <span className={styles.bodyBodyVerySmall_12_clara}>Perfil</span>
                </div>
            </button>
            <button className={styles.btn_footer} type="button" onClick={() => handleButtonClickAmigos()}>
                {showIconAmigos ? (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_amigos.png" alt="icono grupo amigos" />
                ) : (
                    <img className={styles.icono_footer} src="../../../public/imgs/login_registrar_IMGS/footer_amigos_claro.png" alt="icono grupo amigos" />
                )}
                <div className={styles.texto_footer}>
                    <span className={styles.bodyBodyVerySmall_12_clara}>Amigos</span>
                </div>
            </button>

        </div>
    );
};
