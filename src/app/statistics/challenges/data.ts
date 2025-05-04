// statistics/challenges/data.ts 

export type Challenge ={
  id: string;
  titulo: string;
  descripcion: string;
  puntosPorDia: number;
  duracionDias: number;
};
export const retosDisponibles: Challenge[] = [
  {
    id: "reto_cocacola_1",
    titulo: "1 día sin Coca-Cola",
    descripcion: "Evita tomar Coca-Cola por un día.",
    puntosPorDia: 10,
    duracionDias: 1,
  },
  {
    id: "reto_cocacola_2",
    titulo: "2 días sin Coca-Cola",
    descripcion: "Evita tomar Coca-Cola por dos días.",
    puntosPorDia: 20,
    duracionDias: 2,
  },
  {
    id: "reto_cocacola_3",
    titulo: "3 días sin Coca-Cola",
    descripcion: "Evita tomar Coca-Cola por tres días.",
    puntosPorDia: 30,
    duracionDias: 3,
  },
];
