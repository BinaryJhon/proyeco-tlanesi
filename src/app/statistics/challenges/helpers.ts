// stistics/challenges/helpers.ts 

import { Challenge } from './data';

export const calcularPuntosPorChallenge = (challenge: Challenge): number => {

  return challenge.puntosPorDia * challenge.duracionDias;
};

export const calcularPuntosPorRacha = (diasRacha: number): number => {
  return Math.floor(diasRacha/10) * 50;
};
