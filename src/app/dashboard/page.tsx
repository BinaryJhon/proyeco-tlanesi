// src/app/dashboard/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const progress = 50;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Caja blanca centrada */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex overflow-hidden min-h-[80vh]">
        {/* Sidebar (El sidebar ya está incluido en el layout) */}
        
        {/* Contenido principal */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex flex-col items-center">
            {/* Logo o título */}
            <h1 className="text-4xl font-bold text-center mb-4">Bienvenido al Dashboard</h1>
            <p className="text-xl text-center mb-4">Nivel: 1</p>
            <p className="text-lg text-center mb-8">
              Selecciona una opción del menú lateral para comenzar.
            </p>

            {/* Caja de texto con la frase motivacional */}
            <div className="bg-green-100 p-4 rounded-lg shadow-md mb-8">
              <p className="text-lg text-center font-medium">
                <strong>¿Sabías que...?</strong>
              </p>
              <p className="text-center text-gray-600 mt-2">
                Las pequeñas acciones diarias pueden tener un gran impacto en tu bienestar. ¡Sigue adelante!
              </p>
            </div>
              {/* Medidor de progreso semicircular */}
               <div className="relative w-48 h-24 mt-6">
                <svg className="transform rotate-180" width="200" height="100" viewBox="0 0 200 100">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="#d1d5db"
                    strokeWidth="20"
                    fill="transparent"
                  />
                  <circle
                   cx="100"
                   cy="100"
                   r="90"
                   stroke="#16a34f"
                   strokeWidth="20"
                   fill="transparent"
                   strokeDasharray="565.48"
                   strokeDashoffset={(565.48 * (100 - 65)) / 100}
                   strokeLinecap="round"
                   transform="rotate(-90 100 100)"
                  className="transition-all duration-500"
                   />
                 </svg>
                 <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-green-600">65%</div>
                    <div className="text-sm text-gray-500">completado</div>
                 </div>
              </div>


             {/* Enlace a otras páginas o acciones */}
            <div className="mt-6">
              <Link
                href="/statistics/metrics"
                className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition"
              >
                Ver Métricas
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
