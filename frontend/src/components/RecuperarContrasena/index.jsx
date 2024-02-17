import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
<<<<<<< Updated upstream:frontend/src/components/RecuperarContraseña/index.jsx
import Button from "../botones/BotonGeneral";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();

        if (response.status === 200) {
            alert('Correo de recuperación enviado con éxito.');
        } else {
            alert('Error al enviar el correo de recuperación. Por favor, verifica tu correo electrónico.');
        }
        navigate('/login');
=======

export default function RecuperarContrasena() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
>>>>>>> Stashed changes:frontend/src/components/RecuperarContrasena/index.jsx
    };

    return (
        <div className={styles.container}>
<<<<<<< Updated upstream:frontend/src/components/RecuperarContraseña/index.jsx
            <h2 className={styles.heading_5}>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Correo Electrónico:</div>
=======
            <h2 className={styles.heading_5}>Recuperar Cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Nombre de Usuario o E-mail</div>
>>>>>>> Stashed changes:frontend/src/components/RecuperarContrasena/index.jsx
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
<<<<<<< Updated upstream:frontend/src/components/RecuperarContraseña/index.jsx
                <Button>    </Button>
                <button className={styles.btn_standard} type="submit">
                    <h2 className={styles.btn_standard_texto}>Recuperar Contraseña</h2>
                </button>
            </form>
            <button className={styles.btn_standard2} onClick={() => navigate('/login')}>
                <h2 className={styles.btn_standard2_texto}>Volver al Inicio de Sesión</h2>
=======
                <div className={styles.bodyBodyVerySmall}>Deberás poder ingresar al e-mail de la cuenta
                <br /> para poder recuperarla.</div>
            </form>
            <button className={styles.btn_standard} onClick={() => navigate('/login')}>
                <h2 className={styles.btn_standard_texto}>Continuar</h2>
>>>>>>> Stashed changes:frontend/src/components/RecuperarContrasena/index.jsx
            </button>
        </div>
    );
}
