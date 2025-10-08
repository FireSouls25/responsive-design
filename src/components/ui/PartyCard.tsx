// src/components/ui/PartyCard.tsx
import React from 'react';

interface PartyCardProps {
  name: string;
  subtitle: string;
  image: string;
}

const PartyCard = ({ name, subtitle, image }: PartyCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
        <img src={image} alt={`${name} party thumbnail`} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-medium text-gray-900 mb-1">{name}</h4>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default PartyCard;