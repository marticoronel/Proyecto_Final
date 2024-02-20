import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import flecha_retroceder from "../../../public/imgs/login_registrar_IMGS/arrowBack.png";

export default function EmailUsuario() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmint = async (e) => {
    e.preventDefault();

    localStorage.setItem('email', email);

    navigate('/registrarse');
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
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.bodyBodyVerySmall} ${styles.input_advise}`}>
            Deberás poder confirmarlo luego.
          </div>
          <button
            className={`${styles.btn_standard} ${styles.btn_continuar}`}
            onClick={() => {
              localStorage.setItem('email', email);
              navigate('/registrarse');
            }}
            type="button"
          >
            <h2 className={styles.btn_standard_texto}>Continuar</h2>
          </button>
        </form>
      </div>
    </div>
  );
}
