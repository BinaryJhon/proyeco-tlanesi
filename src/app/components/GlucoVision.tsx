'use client';
import React from 'react';
interface GlucosaData{

  hora: string;
  ayer: number;
  hoy: number;
  cambio: number;
}
interface Props {
  datos: GlucosaData[];
}
const GlucoVision: React.FC<Props> = ({ datos }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg overflow-x-auto min-w-full flex-grow">
      <h2 className="text-green-600 text-2xl font-semibold mb-4">GlucoVision</h2>
      <table className="min-w-full table-auto text-left text-sm">
        <thead className="text-gray-700 border-b">
          <tr>
            <th className="p-2">Hora</th>
            <th className="p-2">Ayer (mg/dL)</th>
            <th className="p-2">Hoy (mg/dL)</th>
            <th className="p-2">Cambio(%)</th>
          </tr>
          
        </thead>
        <tbody>
          {datos.map((fila, index)=>(
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2">{fila.hora}</td>              
              <td className="p-2">{fila.ayer} </td>
              <td className="p-2">{fila.hoy} </td>
              <td className={`p-2 ${fila.cambio > 0 ? 'text-red-500' : 'text-green-600'}`}>
              {fila.cambio > 0 ? `+${fila.cambio}%` : `${fila.cambio}%`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GlucoVision;
