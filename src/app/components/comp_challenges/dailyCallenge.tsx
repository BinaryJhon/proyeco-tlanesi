// src/app/components/com_challenges/dailyChallenge.tsx
'use client'
import React, { useState } from 'react';
interface dailyChallengeProps{
  title: string;
  description: string;
  isCompleted: boolean;
  onCompletedChallenge: () => void;
}

const DailyChallenge: React.FC<dailyChallengeProps> = ({ title, description, isCompleted, onCompletedChallenge }) => {
  return (
    <div className="bg-white p-4 m-4 shadow-md rounded-lg w-[300px]">
      <h2 className="text-2xl font-bold text-blue-700">{title}</h2>
      <p className="text-md" dangerouslySetInnerHTML={{ __html: description }}></p>
      {isCompleted ? (
        <p className="text-green-600">Desafio completado!</p>
      ) : (
        <button 
          onClick={onCompletedChallenge}
          className="mt-4 p-2 bg-blue text-white rounded"
        >
        Completar desafio
        </button>
      )}
    </div>
  );
};
export default DailyChallenge;
