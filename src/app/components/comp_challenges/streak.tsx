// src/app/components/comp_challenges/streak.tsx
'use client';
import Rect from 'react';

interface StreakProps {
  title: string;
  days: number;
  goal: number;
  onStreakBreak: () => void;

}

const Streak: React.FC<Streak> = ({ title, days, goal, onStreakBreak })=> {
  return (
    <div className="bg-white p-4 m-4 shadow-md rounded-lg w-[300px]">
      <h2 className="text-2xl font-bold text-green-700">{title}</h2>
      <p className="text-lg">Dias de racha: {days}</p>
      <p className="text=md">Meta: {goal} dias</p>
      {days >= goal?(
        <p className="text-green-600 font-semibold">Meta alcanzada!</p>
      ) : (
        <p className="text-red-600">Sigue intentando!</p>
      )}
      <button onClick={onStreakBreak} className="mt-4 p-2 bg-red-500 text-white rounded-lg">
        Romper racha (solo para probar)
      </button>
    </div>
  );
};
export default Streak;

