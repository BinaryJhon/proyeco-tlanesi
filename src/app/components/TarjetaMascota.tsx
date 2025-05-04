'use client';

import React from 'react';

interface TarjetaMascotaProps {
  nombre: string;
  descripcion: string;
  imagen?: string; // puede ser una URL o ruta local
}

const TarjetaMascota: React.FC<TarjetaMascotaProps> = ({ nombre, descripcion, imagen }) => {
  return (
    <div className="bg-white p-4 m-2 shadow-md rounded-lg w-full max-w-xs text-center">
      {/* Imagen o contenedor vacio */}
      {imagen ? (
        <img src={imagen} alt={nombre} className="w-full h-40 object-cover rounded-md mb-2" />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 italic rounded-md mb-2">
          Sin imagen
        </div>
      )}

      <h2 className="text-xl font-bold text-green-600">{nombre}</h2>
      <p className="text-gray-700 mt-2">{descripcion}</p>
    </div>
  );
};

export default TarjetaMascota;

