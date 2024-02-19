import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import Footer from "../Footer";

export default function Amigos() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div>AMIGOS</div>
            <Footer />
        </div>
    );
};