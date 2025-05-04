// app/dashboard/activities/physicalActivity/helpers.ts 

export const GenerarContenidoHTML = (rutina: any, completed: boolean) => `
  <strong>Nombre de la rutina:</strong> ${rutina.nombreRutina}<br/>
  <strong>Objetivo:</strong> ${rutina.objetivo}<br/>
  <strong>Duración:</strong> ${rutina.duracion}<br/>
  <strong>Ejercicios:</strong>
  <ul class="list-disc list-inside">
    ${rutina.ejercicios.map((ejercicio: string) => `<li>${ejercicio}</li>`).join('')}
  </ul>
  ${completed ? '<span class="text-green-600 font-semibold">¡Rutina completada!</span>' : ''}
`;
