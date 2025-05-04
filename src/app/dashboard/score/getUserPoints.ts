// /dashboard/score/getUser.ts 

export function getUserPoints(): number {
  if(typeof window !== 'undefined') {
    const puntos = localStorage.getItem('puntosTotales');
    return puntos ? parseInt(puntos, 10) : 0;
  }
  return 0;
}
