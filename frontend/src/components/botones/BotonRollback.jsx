import React from 'react'

export default function BotonRollback({ onClick, style, children, className }) {
  return (
    <div onClick={onClick} style={style} className={className}>
        {children}
        <img src="/public/imgs/login_registrar_IMGS/rollback.svg" alt="icono rollback" />
    </div>
  )
}
