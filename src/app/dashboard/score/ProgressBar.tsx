'use client';

import React from 'react';

interface ProgressBarProps {
  porcentaje: number;
  siguienteMascota: string;
  puntosRestantes: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ porcentaje, siguienteMascota, puntosRestantes }) => {
  return (
    <div className="mt-6">
      <p className="mb-1 text-sm text-gray-700">
        Progreso hacia: <strong>{siguienteMascota}</strong> ({puntosRestantes} puntos restantes)
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4 transition-all duration-500"
          style={{ width: `${Math.min(porcentaje, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

