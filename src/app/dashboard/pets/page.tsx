'use client';

import React from 'react';
import { mascotas } from './petsData';
import TarjetaMascota from '@/app/components/TarjetaMascota';

const MascotasPage = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mascotas.map((m) => (
        <TarjetaMascota key={m.id} nombre={m.nombre} descripcion={m.descripcion} />
      ))}
    </div>
  );
};

export default MascotasPage;

