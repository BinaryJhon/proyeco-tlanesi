// app/statistics/metrics/page.tsx
'use client';
import LineChart from '@/app/statistics/score/LineChart';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlucoVision from '@/app/components/GlucoVision';
import { datosGlucosa } from '@/app/dashboard/profile/datosGlucosa';
import { datosPresion } from '@/app/dashboard/profile/datosPresion';
import { datosTrigliceridos } from '@/app/dashboard/profile/datosTrigliceridos';
import Tarjeta from '@/app/components/Tarjeta';
import PressureVision from '@/app/components/PressureVision';
import TriglyVision from '@/app/components/TriglyVision';

export default function stisticsMetrics() {
    const [mostrarTabla, setMostrarTabla]= useState(false);
    const handleMostrarHistorial = () => {
      setMostrarTabla(prev => !prev);
    };
    const ultimaLecturaGlucosa = datosGlucosa[datosGlucosa.length - 1];
    const ultimaLecturaPresion = datosPresion[datosPresion.length - 1]; 
    const ultimaLecturaTrigliceridos = datosTrigliceridos[datosTrigliceridos.length - 1];
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Caja blanca centrada */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex overflow-hidden min-h-[80vh]">
        {/* Sidebar (El sidebar ya esta incluido en el layout) */}
        
        {/* Contenido principal */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex flex-col items-center">

            <h1 className="text-4xl font-bold text-center mb-4">Metricas</h1>
            {/*Tarjetas de estado actual*/}
            <Tarjeta 
              titulo="Estado actual de glucosa"
              contenido={`Hora: ${ultimaLecturaGlucosa.hora}\nNivel hoy: ${ultimaLecturaGlucosa.hoy} mg/dL\nNivel ayer ${ultimaLecturaGlucosa.ayer} mg/dL\nCambio: ${ultimaLecturaGlucosa.cambio > 0 ? '+' : ''} mg/dL`}
            />
            <Tarjeta
              titulo="Estado actual de triglicéridos"
              contenido={`Hora: ${ultimaLecturaTrigliceridos.hora}\nNivel hoy: ${ultimaLecturaTrigliceridos.hoy} mg/dL\nNivel ayer: ${ultimaLecturaTrigliceridos.ayer} mg/dL\nCambio: ${ultimaLecturaTrigliceridos.cambio > 0 ? '+' : ''}${ultimaLecturaTrigliceridos.cambio} mg/dL`}
            />
            <Tarjeta
              titulo="Estado actual de presión arterial"
              contenido={`Hora: ${ultimaLecturaPresion.hora}\nHoy: ${ultimaLecturaPresion.sistolica}/${ultimaLecturaPresion.diastolica} mmHg\nAyer: ${ultimaLecturaPresion.ayerSistolica}/${ultimaLecturaPresion.ayerDiastolica} mmHg\nCambio: ${ultimaLecturaPresion.cambio > 0 ? '+' : ''}${ultimaLecturaPresion.cambio} mmHg`}
            />
            
            {/*Graficas*/}
            <div className="w-full my-8">
              <h2 className="text-xl font-semibold mb-2">Historial de Glucosa</h2>
              <LineChart 
                titulo="Historial de glucosa"
                datos={datosGlucosa}
                series={[
                  {
                    label: 'Ayer',
                    key: 'ayer',
                    color: 'rgba(75, 192, 192, 0.2)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  },
                  {
                    label: 'Hoy',
                    key: 'hoy',
                    color: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  },
                ]}
              />
            </div>

            <div className="w-full my-8">
              <h2 className="text-xl font-semibold mb-2">Historial de Trigliceridos</h2>
              <LineChart 
                titulo="Historial de triglicéridos"
                datos={datosTrigliceridos}
                series={[
                  {
                     label: 'Ayer',
                     key: 'ayer',
                     color: 'rgba(255, 206, 86, 1)',
                     backgroundColor: 'rgba(255, 206, 86, 0.2)',
                  },
                  {
                    label: 'Hoy',
                    key: 'hoy',
                    color: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  },
                ]}
              />
            </div>

            <div className="w-full my-8">
              <h2 className="text-xl font-semibold mb-2">Historial de presion arterial</h2>
              <LineChart 
                titulo="Historial de presion arterial"
                datos={datosPresion}
                series={[
                  {
                    label: 'Sistólica Ayer',
                    key: 'ayer_sistolica',
                    color: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  },
                  {
                    label: 'Sistólica Hoy',
                    key: 'hoy_sistolica',
                    color: 'rgba(255, 159, 64, 1)',
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                  },
                  {
                   label: 'Diastólica Ayer',
                   key: 'ayer_diastolica',
                   color: 'rgba(153, 102, 255, 1)',
                   backgroundColor: 'rgba(153, 102, 255, 0.2)',
                  },
                  {
                    label: 'Diastólica Hoy',
                    key: 'hoy_diastolica',
                    color: 'rgba(201, 203, 207, 1)',
                    backgroundColor: 'rgba(201, 203, 207, 0.2)',
                  },
                ]}
              />
            </div>
              
            {/*Boton y tablas*/}

            <button 
              onClick={handleMostrarHistorial}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {mostrarTabla ? 'Ocultar historial de glucosa' : 'Mostrar historial de glucosa'}
            </button>
            {mostrarTabla && (
              <div className="mt-8 w-full">
                <GlucoVision datos={datosGlucosa}/>
                <TriglyVision datos={datosTrigliceridos}/>
                <PressureVision datos={datosPresion}/>

                    {/* Botón para exportar el historial */}
                   <button
                    onClick={() => alert("Función aún no implementada")}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                   >
                      Exportar historial en PDF
                   </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
