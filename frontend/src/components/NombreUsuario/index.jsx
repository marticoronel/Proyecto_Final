import React, { useState } from "react";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";
import { useNavigate } from "react-router-dom";

export default function NombreUsuario() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nombreUsuario = e.target["identificador"].value;
        const password = e.target["password"].value;
    
        console.log("Se hizo clic en Continuar")
        
        if (!isChecked) {
            alert("Debes aceptar los Términos y Condiciones.");
            return;
        }
    
        const email = localStorage.getItem('email');
    
        try {
            const response = await fetch('http://localhost:3000/registrarse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identificador: nombreUsuario, password, email }),
            });
    
            const data = await response.json();
    
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
            } else {
                console.log(data.message);
            }
            navigate('/home');
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    };
    
    const visibilidadContrasena = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_header}>
                <button className={styles.btn_arrow} onClick={() => navigate('/ingreso_email')}>
                    <img className={styles.arrow} src={flecha_retroceder} alt="navegar hacia atrás" />
                </button>
                <h2 className={styles.heading_5}>Crear Cuenta</h2>
            </div>
            <div className={styles.heading_3}>Ingresa un nombre de usuario y contraseña.</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Nombre de Usuario:</div>
                    <div>
                        <input className={styles.inputLabel}
                            type="text"
                            id="identificador"
                            name="identificador" />
                    </div>
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.heading_4}>Contraseña:</div>
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
                <button className={`${styles.btn_standard} ${styles.btn_continuar}`} type="submit">
                    <h2 className={styles.btn_standard_texto}>Continuar</h2>
                </button>
            </form>
        </div>
    );
}
