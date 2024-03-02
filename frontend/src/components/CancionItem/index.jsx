import React from 'react';

const CancionItem = ({ cancion }) => {
  return (
    <div>
      <li >
        <strong>{cancion.nombre_cancion}</strong> -
        {cancion.nombre_cantante} -
        <img src={`/tapa_disco/${cancion.tapa_disco}`}
          alt="Tapa del Disco" />
      </li>
    </div>
  );
};

export default CancionItem;


