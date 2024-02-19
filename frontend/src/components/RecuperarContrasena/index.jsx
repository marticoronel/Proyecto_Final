import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import Button from "../botones/BotonGeneral";
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";


export default function RecuperarContrasena() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/login')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atras" />
                </button>
                <h2 className={styles.heading_5}>Recuperar Cuenta</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Nombre de Usuario o E-mail</div>
                    <div>
                        <input
                            className={styles.inputLabel}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.bodyBodyVerySmall}>Deberás poder ingresar al e-mail de la cuenta
                    <br /> para poder recuperarla.</div>
            </form>
            <button className={styles.btn_standard} onClick={() => navigate('/login')}>
                <h2 className={styles.btn_standard2_texto}>Continuar</h2>
            </button>
        </div>
    );
}
