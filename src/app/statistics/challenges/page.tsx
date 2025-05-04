// statistics/challenges/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { retosDisponibles } from './data';
import ChallengeCard from './components/challengeCard';
import { completarReto, agregarPuntosRacha, getPuntosTotales } from './state';
import { calcularPuntosPorRacha } from './helpers';

const ChallengePage = () => {
  const [diasRacha, setDiasRacha] = useState(0);
  const [puntos, setPuntos] = useState(0);
   
  useEffect(() => {
    const diasGuardados = Number(localStorage.getItem('diasRacha')) || 0;
    setDiasRacha(diasGuardados);
    setPuntos(getPuntosTotales());
  }, []);

  const handleRetoCompletado = (retoId: string) => {
    const reto = retosDisponibles.find((r) => r.id === retoId);
    if (reto) {
      completarReto(reto);
      setPuntos(getPuntosTotales());
    }
  };
  const handleBonusRacha = () => {
    alert("boton presionado");
    agregarPuntosRacha(diasRacha);
    setPuntos(getPuntosTotales());
  };
  //const puedeReclamar = Math.floor(diasRacha / 10) > Math.floor((Number(localStorage.getItem('rachaReclamadaHasta')) || 0) / 10);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Retos semanales</h1>
      <div className="mb-4">
        <button 
          onClick={handleBonusRacha}
          className="bg-green-500 text-white px-4 py-2 rounde"
        >
          Reclamar puntos por racha
        </button>
      </div>
      <div className="mb-4 text-xl font-semibold">
        Puntos totales: {puntos}
      </div>

      <div className="flex flex-wrap justify-center">
        {retosDisponibles.map((reto) => (
          <ChallengeCard
            key={reto.id}
            reto={reto}
            onComplete={() => handleRetoCompletado(reto.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengePage; 


