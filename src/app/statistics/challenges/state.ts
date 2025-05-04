// statistics/challenges/state.ts

import { challenge } from './data';

export function getPuntosTotales(): number {
  if (typeof window === 'undefined') return 0;
    return Number(localStorage.getItem('puntosTotales') || '0');

}

export function getRetosCompletados(): Set<string> {
  if (typeof window !== 'undefined') {
    return new Set(JSON.parse(localStorage.getItem('retosCompletados') || '[]'));
  }
  return new Set();
}

export function completarReto(reto: challenge) {
  if (typeof window === 'undefined') return;

  const puntos = reto.puntoPorDia * reto.duracionDias;

  const completados = getRetosCompletados();
  completados.add(reto.id);

  const total = getPuntosTotales() + puntos;

  localStorage.setItem('retosCompletados', JSON.stringify([...completados]));
  localStorage.setItem('puntosTotales', total.toString());
}

export function agregarPuntosRacha(diasRacha: number) {
  if (typeof window === 'undefined') return;

  const puntos = getPuntosTotales();
  const rachaReclamadaHasta = Number(localStorage.getItem('rachaReclamadaHasta') || '0');

  const nuevasRachas = Math.floor(diasRacha / 10);
  const rachasYaReclamadas = Math.floor(rachaReclamadaHasta / 10);

  const rachasPorReclamar = nuevasRachas - rachasYaReclamadas;

  if (nuevasRachas > 0) {
    const bonus = rachasPorReclamar * 50;
    const nuevoTotal = puntos + bonus;

    localStorage.setItem('puntosTotales', nuevoTotal.toString());
    localStorage.setItem('rachaReclamadaHasta', String(nuevasRachas * 10));
    console.log(`✅ Bonus agregado: ${bonus} puntos`);
  } else {
    console.log('Ya reclamaste todos los puntos disponibles por racha.');
  }
}

