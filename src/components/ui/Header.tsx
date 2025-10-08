// src/components/ui/Header.tsx
import React from 'react';
import { Search, Bell, ChevronLeft, ChevronRight, Settings } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4" suppressHydrationWarning={true}>
        <button className="p-2 hover:bg-gray-200 rounded-lg">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-lg">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="relative w-64 md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Settings className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button className="relative p-2">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <img src="/images/witcher.webp" alt="Ramona F. avatar" className="w-10 h-10 rounded-full bg-orange-300" />
          <div className="hidden sm:block">
            <p className="font-medium text-sm">Ramona F.</p>
            <p className="text-xs text-gray-500">Level 12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;