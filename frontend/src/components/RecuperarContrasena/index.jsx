import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import Button from "../botones/BotonGeneral";

export default function RecuperarContrasena() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tu lógica de manejo de formulario aquí...
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading_5}>Recuperar Cuenta</h2>
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
