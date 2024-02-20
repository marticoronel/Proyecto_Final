import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

export default function Login() {
    const navigate = useNavigate();
    const [identificador, setIdentificador] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmint = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identificador, password }),
            });

            console.log(password);
            console.log(identificador);

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('Authorization', data.token);
                navigate('/home');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const visibilidadContrasena = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                </button>
                <h2 className={styles.heading_5}>Iniciar Sesión</h2>
            </div>
            <form onSubmit={handleSubmint}>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Nombre de Usuario o E-mail:</div>
                    <div>
                        <input
                            className={styles.inputLabel}
                            type="text"
                            id="identificador"
                            name="identificador"
                            value={identificador}
                            onChange={(e) => setIdentificador(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Contraseña:</div>
                    <div>
                        <input
                            className={styles.inputLabel}
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={styles.eyeButton} type="button" onClick={visibilidadContrasena}>
                            {showPassword ? (
                                <img src="../../../public/imgs/login_registrar_IMGS/passwordOpenEye.png" alt="Ocultar contraseña" />
                            ) : (
                                <img src="../../../public/imgs/login_registrar_IMGS/passwordEye.png" alt="Mostrar contraseña" />
                            )}
                        </button>
                    </div>
                </div>
                <button className={styles.btn_standard} type="submit"><h2 className={styles.btn_standard_texto}>Iniciar sesión</h2></button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.btn_standard2} onClick={() => navigate('/recuperar_contrasena')}>
                <h2 className={styles.btn_standard2_texto}>¿Olvidaste tu Contraseña?</h2>
            </button>
        </div>
    );
}
