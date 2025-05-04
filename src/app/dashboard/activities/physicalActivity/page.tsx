// app/dashboard/activities/phydicalActivity/page.tsx
'use client';
import React, { useState, useEffect } from 'react'; 
import Tarjeta from '@/app/components/Tarjeta';
import { obtenerRutinaPorRacha } from '@/dactivities/PhysicalActivity';
import { rutinaBasica, rutinaIntermedia, rutinaAvanzada } from './rutinas';
import { GenerarContenidoHTML } from './helpers';

const PhysicalActivityPage = () => {
  const [completed, setCompleted] = useState(false);
  const [diasRacha, setDiasRacha] = useState(60);

  useEffect(() => {
      localStorage.setItem('diasRacha', diasRacha.toString());
  }, [diasRacha]);

  const handleComplete = () => {
    setCompleted(true);
  };

return (
   <div className="flex flex-col m-2 p-2 items-center min-h-screen">
    {/* Tarjeta de racha*/}
    <div className="w-full flex justify-start p-2 md:p-4">
      <Tarjeta 
        titulo="Tu racha"
        contenido={`<strong>Días consecutivos:</strong> ${diasRacha} días`}
        className="w-[200px] m-2 p-2 h-[100px]"
      />
    </div>
    {/*Rutinas basadas en en dias de racha*/}

    {diasRacha <= 29 && (
      <Tarjeta
        titulo="Rutina de hoy: Basica"
        contenido={GenerarContenidoHTML(rutinaBasica, completed)}
        className="w-[450px] m-2 p-2 h-[400px]"
      />
    )}
    {diasRacha >= 30 && diasRacha < 80 && (
      <Tarjeta 
        titulo="Rutina intermedia"
        contenido={GenerarContenidoHTML(rutinaIntermedia, completed)}
        className="w-[300px] m-2 p-2 h-[400px]"
      />

    )}
    {diasRacha >= 80 && (
      <Tarjeta
        titulo="Rutina avanzada"
        contenido={GenerarContenidoHTML(rutinaAvanzada, completed)}
        className="w-[300px] m-2 p-2 h-[400px]"
      />

    )}
    {/*Boton marcar como completado*/}
    {!completed && (
      <div className="flex justify-center mt-4">
        <button 
          onClick={handleComplete}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition"
        >
          Marcar como completada
        </button>
      </div>

    )}

    </div>
  );
};
export default PhysicalActivityPage;

