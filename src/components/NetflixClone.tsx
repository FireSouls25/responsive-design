// src/components/NetflixClone.tsx
import React from 'react';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';
import HeroSection from './ui/HeroSection';
import PartyCard from './ui/PartyCard';
import ContinueWatchingCard from './ui/ContinueWatchingCard';
import RightSidebar from './ui/RightSidebar';
import { Party, ContinueWatchingItem, User } from '@/types';

const NetflixClone = () => {
  const parties: Party[] = [
    { 
      id: 1, 
      name: 'Cadaver', 
      subtitle: 'Horror marathon!', 
      image: '/images/witcher.webp', 
      users: [] 
    },
    { 
      id: 2, 
      name: 'Bladerunner 2049', 
      subtitle: 'Sci-fi binge', 
      image: '/images/witcher.webp', 
      users: [] 
    },
    { 
      id: 3, 
      name: 'Monsters Inc.', 
      subtitle: "Don't make me grow up", 
      image: '/images/witcher.webp', 
      users: [] 
    },
    { 
      id: 4, 
      name: 'Friends', 
      subtitle: 'We were on a break!', 
      image: '/images/witcher.webp', 
      users: [] 
    },
  ];

  const continueWatching: ContinueWatchingItem[] = [
    { 
      id: 1, 
      title: 'Haunting of Hill House', 
      progress: '10XP', 
      image: '/images/witcher.webp' 
    },
    { 
      id: 2, 
      title: 'Ratched', 
      progress: '10XP', 
      image: '/images/witcher.webp' 
    },
    { 
      id: 3, 
      title: 'El Camino', 
      progress: '5XP', 
      image: '/images/witcher.webp' 
    },
    { 
      id: 4, 
      title: 'Stranger Things', 
      progress: '10XP', 
      image: '/images/witcher.webp' 
    },
  ];


  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-8">
          <Header />
          <HeroSection />

          {/* Parties Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Parties</h3>
              <input type="range" className="w-32 h-1" defaultValue="50" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {parties.map((party) => (
                <PartyCard
                  key={party.id}
                  name={party.name}
                  subtitle={party.subtitle}
                  image={party.image}
                />
              ))}
            </div>
          </div>

          {/* Continue Watching Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Continue watching</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {continueWatching.map((item) => (
                <ContinueWatchingCard
                  key={item.id}
                  title={item.title}
                  progress={item.progress}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <RightSidebar />
    </div>
  );
};

export default NetflixClone;