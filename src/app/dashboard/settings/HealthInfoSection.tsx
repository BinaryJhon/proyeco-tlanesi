'use client';

import { useState } from 'react';

type Props = {
  modoEdicion: boolean;
};

export default function HealthinfoSectyion({ modoEdicion }: Props) {
  
  const [datos, setDatos] = useState({

     edad: 30, 
      peso: 70,
      altura: 175,
      padecimiento: 'Diabetes tipo 2',
      receta: 'Metformina -1 tableta a las 8:00 AM',
  });

  const handleInputChange = (e: React.ChangeEvent<HTLInputElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value});
  };

  return(
    <div className="space-y-4">
    {[
      {label: 'edad', name:'edad' },
      {label: 'Peso (kg)', name: 'peso' },
      {label: 'Altura (cm)', name: 'altura' },
      {label: 'Padecimiento', name: 'padecimiento' },
      {label: 'Receta medica', name: 'receta' },
    ].map(({ label, name }) => (
      <div key={name}>
        <label className="block font-medium">{label}</label>
          {modoEdicion ? (
            <input 
              type="text"
              name={name}
              value={datos[name as keyof typeof datos]}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          ) : (
            <p className="text-gray-700">{datos[name as keyof typeof datos]}</p>
          )}
      </div>
    ))}     
    </div>
  );
}
