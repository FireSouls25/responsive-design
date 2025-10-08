// src/components/ui/Sidebar.tsx
import React from 'react';
import { Heart, Calendar, Users, LogOut, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-56 bg-white flex-col p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-600">Netflix.</h1>
      </div>

      <nav className="flex-1 space-y-6">
        <div>
          <p className="text-xs text-gray-400 mb-3">Menu</p>
          <button className="flex items-center gap-3 w-full p-2 text-gray-900 bg-red-50 rounded-lg border-l-4 border-red-600">
            <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-medium">Browse</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 text-gray-500 hover:text-gray-900 mt-2">
            <Heart className="w-5 h-5" />
            <span>Watchlist</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 text-gray-500 hover:text-gray-900 mt-2">
            <Calendar className="w-5 h-5" />
            <span>Coming soon</span>
          </button>
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-3">Social</p>
          <button className="flex items-center gap-3 w-full p-2 text-gray-500 hover:text-gray-900">
            <Users className="w-5 h-5" />
            <span>Friends</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 text-gray-500 hover:text-gray-900 mt-2">
            <Users className="w-5 h-5" />
            <span>Parties</span>
          </button>
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-3">General</p>
          <button className="flex items-center gap-3 w-full p-2 text-gray-500 hover:text-gray-900">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-3 w-full p-2 text-gray-500 hover:text-gray-900 mt-2">
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </button>
        </div>
      </nav>

      {/* User Card */}
      <div className="bg-gray-50 rounded-xl p-4 mt-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">PA</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Popcorn Addict</p>
            <p className="text-xs text-gray-500">4:58s viewing time</p>
          </div>
        </div>
        <button className="w-full bg-blue-300 hover:bg-blue-400 text-white py-2 px-4 rounded-lg text-sm font-medium">
          View challenges
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;