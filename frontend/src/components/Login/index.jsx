import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';


export default function Login() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmint = async (e) => {
        e.preventDefault();
        const usuario = e.target["email"].value;
        const password = e.target["password"].value;

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        });
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } else {
            alert(data.message);
        }
    };

    const visibilidadContraseña = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading_5}>Iniciar Sesión</h2>
            <div className={styles.inputDiv}>
                <div className={styles.heading_4}>Nombre de Usuario o E-mail:</div>
                <form onSubmit={handleSubmint}>
                    <div>
                        <input className={styles.inputLabel} type="email" id="email" name="email" />
                    </div>
                </form>
            </div>
            <div className={styles.inputDiv}>
                <div className={styles.heading_4}>Contraseña:</div>
                <form onSubmit={handleSubmint}>
                    <div>
                        <input className={styles.inputLabel}
                               type={showPassword ? "text" : "password"}
                               id="password"
                               name="password"
                               placeholder=""
                        />
                        <button className={styles.eyeButton} type="button" onClick={visibilidadContraseña}>
                            {showPassword ? (
                                <img src="../../../public/imgs/login_registrar_IMGS/passwordOpenEye.png" alt="Ocultar contraseña" />
                            ) : (
                                <img src="../../../public/imgs/login_registrar_IMGS/passwordEye.png" alt="Mostrar contraseña" />
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <button className={styles.btn_standard} type="submit"><h2 className={styles.btn_standard_texto}>Iniciar sesión</h2></button>

            <button className={styles.btn_standard2} type="submit"><h2 className={styles.btn_standard2_texto}>¿Olvidaste tu Contraseña?</h2></button>
        </div >
    );
};

