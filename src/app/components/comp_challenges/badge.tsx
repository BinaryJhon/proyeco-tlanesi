// src/app/components/comp_challenges/badge.tsx
'use client';

import React from 'react';

interface BadgeProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Badge: Reac.FC<BadgeProps> = ({ title, description, imageUrl }) => {
  return(
    <div className="bg-white p-4 m-4 shadow-md rounded-lg w-[250px]">
      <h2 className="text-2xl font-bold text-green-700">{title}</h2>
      <p className="text-md">{description}</p>
      <img src={imageUrl} alt={title} className="w-16 h-16 object-cover mt-4"/>
    </div>
  );
};

export default Badge;

