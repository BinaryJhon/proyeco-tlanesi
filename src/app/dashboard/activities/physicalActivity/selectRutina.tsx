// src/app/dashboard/activities/physicalActivity/selectRutina.tsx
import React from 'react';
import Tarjeta from '@/app/components/Tarjeta';

export function obtenerRutinaPorRacha(diasRacha: number): JSX.Element | null {

  if (diasRacha < 30) {
    return(
      <Tarjeta
        titulo="Rutina basica"  
        contenido="Esta es la rutina inicial"
        className="w-[200] h-[200]"
      />
    );
  } else if (diasRacha < 60) {
    return (
      <Tarjeta 
        titulo="Rutina intermedia"
        contenido="Esta es tu rutina inicial."
        className="w-[200] h-[200]"
      />
    );
  } else {
    return (
      <Tarjeta
        titulo="Rutina avanzada"
        contenido="Ahora tienes acceso a la rutina avanzada"
        className="w-[200] h-[200]"
      />
    );
  }
}
