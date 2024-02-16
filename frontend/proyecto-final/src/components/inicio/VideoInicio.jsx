import React from 'react';
import estilos from './videoInicio.module.css'

const VideoBackground = () => {
  return (
    <div className={estilos.videoBackground}>
      <video autoPlay loop muted>
        <source src="../public/video/21mb.mp4" type="video/mp4" />
        {/* Aquí puedes agregar más fuentes de video para navegadores diferentes */}
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoBackground;