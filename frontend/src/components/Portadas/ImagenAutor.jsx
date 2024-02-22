import React from 'react'
import styles from './imagenAuto.module.css'
export default function ImagenAutor({ onClick, style, children, className }) {
  return (
    <div onClick={onClick} style={style} className={className} >
      {children}
      <img className={styles.img_autor} src="/public/imgs/cantante_prueba.png" alt="" />
    </div>
  )
}
