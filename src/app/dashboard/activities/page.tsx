// /app/dashboard/activities/page.tsx
'use client';
import React, { useState, useEffect } from 'react';

import Tarjeta from '@/app/components/Tarjeta';
import DailyChallenge from '@/app/components/comp_challenges/dailyCallenge';
import { physicalActivityChallenge } from '@/app/statistics/challenges/physicalActivity';
import { getDatosNutrition } from '@/app/dashboard/activities/nutrition/nutritionData';


export default function NutritionPage(){
  const [isChallengeCompleted, setIsChallengeCompleted] = useState(false);

  const datosNutrition = getDatosNutrition();
  const challengeData = physicalActivityChallenge(
    isChallengeCompleted, () => setIsChallengeCompleted(true),
  );


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-green-700">🥗 Nutrición</h1>
      <div className="flex flex-wrap gap-6 justify-center space-y-6">
      {/*tarjeta seguimieno*/}
        <Tarjeta titulo="seguimiento de la dieta" 
         contenido={`
           <strong class="font-bold">Hora de comida:</strong> ${datosNutrition.horaComida}
           <strong class="font-bold">Dias siguiendo la dieta: </strong>${datosNutrition.diasDieta}
           <strong class="font-bold">Alimentos prohibidos:</strong> ${datosNutrition.alimentosProhibidos}
          `} 
         className="w-[250px] m-1 p-1 h-[300px]"
        />
        {/*tarjeta recomenaciones*/}
        <Tarjeta titulo="recomendaciones de nutricion." 
        contenido={`<strong class="font-bold">Calorias recomendadas:</strong> ${datosNutrition.caloriasRecomendadas}\n<strong class="font-bold">Recomendaciones personales:</strong> ${datosNutrition.recomendaciones}`} 
          className="w-[340px] m-2 p-2 h-[300px]"
        />    
        {/*Desafio diario*/}
        <DailyChallenge {...challengeData}/>
      </div>
    </div>
  );
}
