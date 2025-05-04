// src/app/dashboard/layout.tsx
'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Caja blanca centrada */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden min-h-[80vh]">

        {/* Logo en la parte superior derecha de la caja blanca */}
        <div className="absolute top-4 right-4 z-10">
          <Image
            src="/images/logo.png"
            alt="Logo Tlanesi"
            width={80}
            height={50}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Sidebar */}
        <div className={`bg-green-900 text-white transition-all duration-300 ${isOpen ? 'w-50' : 'w-20'} p-4 flex flex-col`}>
          {/* Botón de menú */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl mt-6 mb-6 hover:bg-green-800"
          >
            ☰
          </button>

          {isOpen && (
            <nav className="flex flex-col gap-4 mt-4">
              <Link href="/dashboard" className="hover:text-gray-300">Inicio</Link>
              <Link href="/dashboard/profile" className="hover:text-gray-300">Perfil</Link>
              <Link href="/dashboard/activities" className="hover:text-gray-300">Actividad</Link>
              <Link href="/statistics/metrics" className="hover:text-gray-300">Métricas</Link>
              <Link href="/statistics/challenges" className="hover:text-gray-300">Estado de retos</Link>
              <Link href="/dashboard/score" className="hover:text-gray-300">Puntaje</Link>
              <Link href="/dashboard/trivia" className="hover:text-gray-300">Trivia</Link>
              <Link href="/dashboard/activities/physicalActivity" className="hover:text-gray-300">Actividad fisica</Link>
              <Link href="/dashboard/settings" className="hover:text-gray-300">Ajustes</Link>
              <Link href="/dashboard/pets" className="hover:text-gray-300">Mascotas</Link>
            </nav>
          )}
        </div>

        {/* Contenido principal */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
