// statistics/challenges/challengeCard.tsx 

import React from 'react';
import Tarjeta from '@/app/components/Tarjeta';
import { Challenge } from '../data';

type Props = {
  reto: Challenge;
  onComplete: () => void;
};

const ChallengeCard = ({ reto, onComplete }: Props) => {
  return (
    <Tarjeta titulo={reto.tituulo}
    contenido={`${reto.descripcion} (${reto.puntosPorDia}) puntos/dia`}
    >
      <button onClick={onComplete}
      className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
        Marcar como completado
      </button>
    </Tarjeta>


  );
};

export default ChallengeCard;

