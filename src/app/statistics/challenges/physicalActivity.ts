// app/statistics/challenges/physicalActivityChallenge.ts
export function physicalActivityChallenge(
  isCompleted: boolean,
  onCompletedChallenge: () => void
) {
  return {
    title: "Desafío diario de actividad física",
    description: `Realiza al menos 30 minutos de ejercicio físico hoy. <br />
    - <strong class="font-bold">Camina 10,000 pasos</strong> 👟<br />
    - <strong class="font-bold">Estira después de entrenar</strong> 🤸‍♀️`,
    isCompleted,
    onCompletedChallenge,
  };
}

