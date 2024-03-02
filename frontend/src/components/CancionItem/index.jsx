import React from 'react';

const CancionItem = ({ cancion }) => {
  return (
    <li >
              <strong>{cancion.nombre_cancion}</strong> - 
              {cancion.nombre_cantante} - 
              <img src={`/tapa_disco/${cancion.tapa_disco}`} 
              alt="Tapa del Disco" />
    </li>
  );
};

export default CancionItem;


