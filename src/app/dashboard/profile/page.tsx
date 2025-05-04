// app/dashboard/profile/page.tsx
'use client';
import React from 'react';
import Tarjeta from '@/app/components/Tarjeta';
import BotonEditar from '@/app/components/BotonEditar';
import BotonCambiarFoto from '@/app/components/BotonCambiarFoto';
import BotonCambiarPasssword from '@/app/components/BotonCambiarPasssword';
import GlucoVision from '@/app/components/GlucoVision';
import TriglyVision from '@/app/components/TriglyVision';
import PressureVision from '@/app/components/PressureVision';
import { datosGlucosa} from '@/app/dashboard/profile/datosGlucosa';
import { datosTrigliceridos } from '@/app/dashboard/profile/datosTrigliceridos'; 
import { datosPresion } from '@/app/dashboard/profile/datosPresion';


const ProfilePage = () => {
  const usuario = {
    nombre: 'Juan perez',
    fechaNacimiento: '1990-05-15',
    padecimiento: 'Hipertencion',
    correo: 'juan.pehdhdhdhdkakarez@hola.com',
    edad: 35,
    peso: 76,
    altura: 182,
    imc:22.04,
    estadoIMC:'Normal'
  };

  return(
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Perfil</h1>
      <p>Bienvenido al perfil, {usuario.nombre}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <Tarjeta titulo="Datos personales"
        contenido={`Nombre: ${usuario.nombre}\nEdad: ${usuario.edad}\nFecha de nacimiento: ${usuario.fechaNacimiento}\nPeso: ${usuario.peso}\nAltura:${usuario.altura}\nIMC actual: ${usuario.imc}→ ${usuario.estadoIMC}`}
        i
        />
        <Tarjeta titulo="padecimientos:"
        contenido={`Padecimiento: ${usuario.padecimiento}`}
        />
        <Tarjeta titulo="Correro electronico"
        contenido={`Correo: ${usuario.correo}`}
            
        />
      </div>

        {/*tabla de glucosa*/}
        <div className = "md:col-span-3 mt-8">
          <GlucoVision datos={datosGlucosa}/>
        </div>
        {/*tabla Trigliceridos*/}
        <div className="md:col-span-3 mt-8">
          <TriglyVision datos={datosTrigliceridos}/>
        </div>
        <div className="md:col-span-3 mt-8">
          <PressureVision datos={datosPresion} />
        </div>
        
        {/*Botonnes*/}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-8">
          <BotonCambiarFoto onClick={() => alert('Editar Foto de perfil')}/>
          <BotonEditar onClick={()=> alert('Editar informacion')}/>
          <BotonCambiarPasssword onClick={()=> alert('cambiar contraseña')}/>

        </div>
     
    </div>
  );
};

export default ProfilePage;


