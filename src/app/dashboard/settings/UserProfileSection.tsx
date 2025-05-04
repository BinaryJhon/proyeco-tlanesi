'use client';

type Props = {
  nombre?: string;
  correro?: string;
  foto?: string;
  sexo?: string;

};

export default function userprofileSection ({
  nombre = 'Juan Perez',
  correo = 'juan.perez@gmail.com',
  foto = 'https://via.placeholder.com/150',
  sexo = 'masculino',
}: Props) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img src={foto} alt="Foto de perfil" className="w-24 h-24 rounded-full object-cover"/>
       <div>
        <p className="text-lg font-semibold">{nombre}</p>
        <p className="text-gray-500">{correo}</p>
        <p className="text-gray-500">sexo: {sexo}</p>

       </div>
    </div>
  );
} 
