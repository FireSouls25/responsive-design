// src/components/ui/ContinueWatchingCard.tsx
import React from 'react';

interface ContinueWatchingCardProps {
  title: string;
  progress: string;
  image: string;
}

const ContinueWatchingCard = ({ title, progress, image }: ContinueWatchingCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden mb-3 aspect-video bg-gray-300">
        <img src={image} alt={`${title} thumbnail`} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
          {progress}
        </div>
      </div>
      <h4 className="font-medium text-gray-900">{title}</h4>
    </div>
  );
};

export default ContinueWatchingCard;