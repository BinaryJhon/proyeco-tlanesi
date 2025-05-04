// src/app/auth/sign-in/page.tsx
"use client";
import { useRouter}  from "next/navigation";
export default function Welcome() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Logo + Back */}
        <div className="p-4 flex items-center justify-between">

          <button onClick={() => router.back()} className="text-green-900 text-5xl font-bold hover:text-green-600 transition ">←</button>

        </div>
            {/* Logo */}
        <div className="flex flex-col items-center">
        
          <img src="/images/logo.png" alt="Logo Tlanesi" className="w-60 mb-5" />
        </div>

        {/* Seccion verde */}
        <div className="bg-green-900 text-white px-8 py-10 rounded-tl-[120px] md:rounded-tl-[180px]">
          <h1 className="text-4xl font-semibold mb-6 text-center">Bienvenido</h1>
          {/*formulario login*/}
          <form className="flex flex-col gap-4">
            <input
              type="usuario"
              name="input_user"
              placeholder="usuario"
              className="px-4 py-3 rounded bg-gray-100 text-black"
            />
            <input
              type="password"
              name="input_password"
              placeholder="Contraseña"
              className="px-4 py-3 rounded bg-gray-100 text-black"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 transition rounded px-4 py-2"
            >
              Iniciar sesion
            </button>
           </form>   
            {/*Boton de google*/}
             <div className="mt-4">
                <button
                  onClick={() => console.log("Iniciar sesion con google ")}
                  className="flex items-center justify-center grap-2 w-full bg-white border border border-gray-300 text-gray-700 font-medium rounded px-4 py-2 hover:shadow transition"
                >
                <img src="/images/google_Logo.png" alt="google logo" className="w-8 h-8"/>
                Inicar sesion con google
                </button>
             </div> 
        </div>
      </div>
    </div>
  );
}
