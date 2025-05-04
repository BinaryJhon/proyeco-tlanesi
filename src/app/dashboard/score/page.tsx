// /app/dashboard/score/page.tsx
'use client';
import ProgressBar from '@/app/dashboard/score/ProgressBar';
import { getUserPoints } from '@/app/dashboard/score/getUserPoints';
import React, { useState, useEffect } from 'react';
import Tarjeta from '@/app/components/Tarjeta';
import TarjetaMascota from '@/app/components/TarjetaMascota';
import { mascotas } from '../pets/petsData';

const ScorePage = () => {
  const [puntos, setPuntos] = useState(0);

  useEffect (() => {
    const pts = getUserPoints();
    setPuntos(pts);
  }, []);

  const desbloqueadas = mascotas.filter((m) => puntos >= m.puntosNecesarios);
  const siguiente = mascotas.find((m) => puntos < m.puntosNecesarios);
  const porcentaje = siguiente 
    ? (puntos / siguiente.puntosNecesarios) * 100
    : 100;

  const puntosRestantes = siguiente 
    ? siguiente.puntosNecesarios - puntos 
    : 0;

  const nombreSiguiente = siguiente 
    ? siguiente.nombre 
    : 'Has desbloqueado todas las mascotas!';

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Puntuacion</h1>
      <div className="mb-6 flex justify-center">
        {/*Tarjeta de puntos*/}
          <Tarjeta
            titulo="Puntos totales"
            contenido={`Tienes actualmente ${puntos} puntos acumulados.\nSigue asi para desboquear mas mascotas.!`}
          />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-green-600 text-center"> Mascotas desbloqueadas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {desbloqueadas.length > 0 ? (
          desbloqueadas.map((m) => (
            <TarjetaMascota
              key={m.id}
              nombre={m.nombre}
              descripcion={m.descripcion}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Aun no has desbloqueado ninguna mascota
          </p>
        )}
      </div>
      <ProgressBar
        porcentaje={porcentaje}
        siguienteMascota={nombreSiguiente}
        puntosRestantes={puntosRestantes}
      />
    </div>
  );
};
export default ScorePage;

