import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

export default function nombreUsuario() {
    const navigate = useNavigate();
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmint = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/registrarse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre_usuario: nombreUsuario }),
        });

        const data = await response.json();

        if (response.status === 200) {
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                </button>
                <h2 className={styles.heading_5}>Crear Cuenta</h2>
            </div>
            <div className={styles.heading_3}>¿Cuál es tu correo electrónico?</div>
            <div className={styles.inputDiv}>
                <div className={styles.heading_4}>Correo electrónico:</div>
                <form onSubmit={handleSubmint}>
                    <div>
                        <input
                            className={styles.inputLabel}
                            type="text"
                            id="nombre"
                            name="nombre_usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <button className={styles.btn_standard} onClick={() => navigate('/registrarse/nombre_usuario')} type="submit">
                        <h2 className={styles.btn_standard_texto}>Continuar</h2>
                    </button>
                </form>
                <div className={styles.bodyBodyVerySmall}>Deberás poder confirmarlo luego.</div>
            </div>
        </div>
    );
};

