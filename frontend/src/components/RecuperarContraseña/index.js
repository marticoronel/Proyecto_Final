import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

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
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading_5}>Recuperar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Correo Electrónico:</div>
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
                <button className={styles.btn_standard} type="submit">
                    <h2 className={styles.btn_standard_texto}>Recuperar Contraseña</h2>
                </button>
            </form>
            <button className={styles.btn_standard2} onClick={() => navigate('/login')}>
                <h2 className={styles.btn_standard2_texto}>Volver al Inicio de Sesión</h2>
            </button>
        </div>
    );
}
