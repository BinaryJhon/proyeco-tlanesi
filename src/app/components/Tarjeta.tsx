//src/app/components/Tarjeta.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface TarjetaProps {
  titulo: string;
  contenido: string;
  imagen?: string;
  className?: string;
}

const Tarjeta: React.FC<TarjetaProps> = ({ titulo, contenido, imagen, className}) => {
  const [isClient, setIsClient]= useState(false);
  useEffect(() => {
    setIsClient(true);
  },[]);

  if(!isClient){
    return null;

  }

  return (
    <div className={`bg-white p-1 m-4 shadow-md rounded-lg overflow-hidden ${className} flex flex-col justify-center items-center`}>
      {imagen && <img src={imagen} alt={titulo} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h2 className="text-green-600 text-2xl font-semibold">{titulo}</h2>
        <p className="text-black-700 whitespace-pre-line break-words" dangerouslySetInnerHTML={{ __html: contenido }}/>
        
      </div>
    </div>
  );
};

export default Tarjeta;

