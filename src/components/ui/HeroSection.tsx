// src/components/ui/HeroSection.tsx
import React from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-8 h-64 md:h-96 bg-gradient-to-r from-gray-700 to-gray-600">
      <Image src="/images/witcher.webp" alt="The Witcher hero banner showing Geralt with sword" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Top badge */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs flex items-center gap-2">
        <span>10XP / episode</span>
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-white"></div>
          <div className="w-5 h-5 rounded-full bg-green-400 border-2 border-white"></div>
          <div className="w-5 h-5 rounded-full bg-purple-400 border-2 border-white"></div>
        </div>
        <span>+5 friends are watching</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-8 left-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">The Witcher</h2>
        <div className="flex items-center gap-4 text-white text-sm mb-4">
          <span className="bg-green-500 px-2 py-1 rounded">94% Match</span>
          <span>2 seasons</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2">
            Watch
          </button>
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-lg">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;