import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

export default function nombreUsuario() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmint = async (e) => {
        e.preventDefault();
        const usuario = e.target["email"].value;
        const password = e.target["password"].value;

        if (!isChecked) {
            alert("Debes aceptar los Términos y Condiciones.");
            return;
        }

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

    const visibilidadContrasena = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/registrarse')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                </button>
                <h2 className={styles.heading_5}>Crear Cuenta</h2>
            </div>
            <div className={styles.heading_3}>Ingresa un nombre de <br /> usuario y contraseña.</div>
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
                        <button className={styles.eyeButton} type="button" onClick={visibilidadContrasena}>
                            {showPassword ? (
                                <img src="../../../public/imgs/login_registrar_IMGS/passwordOpenEye.png" alt="Ocultar contraseña" />
                            ) : (
                                <img src="../../../public/imgs/login_registrar_IMGS/passwordEye.png" alt="Mostrar contraseña" />
                            )}
                        </button>
                    </div>
                </form>
                <div className={`${styles.bodyBodyVerySmall} ${styles.input_advise}`}>
                    Deberá contener al menos 8 caracteres.
                </div>
            </div>
            <div className={styles.checkboxContainer}>
                <input className={styles.checkbox}
                    type="checkbox"
                    id="aceptarTerminos"
                    name="aceptar_terminos"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <label className={styles.bodyBodyVerySmall} htmlFor="aceptarTerminos">He leído y acepto los Términos y Condiciones.</label>
            </div>
            <button className={`${styles.btn_standard} ${styles.btn_continuar}`} onClick={() => navigate('/login')}>
                <h2 className={styles.btn_standard_texto}>Continuar</h2>
            </button>
        </div>
    );
};
