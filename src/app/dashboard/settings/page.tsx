'use client';
import { useState } from 'react';
import UserProfileSection from './UserProfileSection';
import HealthInfoSection from './HealthInfoSection';
import BotonEditar from '@/app/components/BotonEditar';

export default function AjustesPage() {
  const [modoEdicion, setModoEdicion] = useState(false);
  
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajustes</h2>
      <UserProfileSection/>
      <HealthInfoSection modoEdicion={modoEdicion}/>
      <div className="mt-6">
        <BotonEditar onClick={() => setModoEdicion(!modoEdicion)} />
      </div>
    </div>
  );

}
