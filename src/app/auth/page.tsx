// src/app/auth/page.tsx
'use client';
import Link from "next/link";
import Image from 'next/image';

export default function AuthPage(){
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-900 p-4">
      
      {/* Caja blanca centrada con sombra */}
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl w-full text-center space-y-6">

        <Image 
          src="/images/logo.png" 
          alt="logo Tlanesi"
          width={270} 
          height={100}
          priority
          className="mx-auto rounded-lg shadow-md" 
        />
        
        <h1 className="text-3xl font-bold">
          Bienvenido a <span className="text-green-600">TLANESI</span>
        </h1>

        <h2 className="text-xl font-semibold text-gray-700">
          Tu camino al bienestar empieza <span className="text-green-600">ahora</span>
        </h2>

        <div className="flex justify-center">
          <Link 
            href="/auth/sign-in" 
            className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition"
          >
            Iniciar sesión
          </Link>
        </div>

      </div>
    </main>
  );
}
