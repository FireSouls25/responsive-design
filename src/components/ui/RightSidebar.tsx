import React from 'react';
import Image from 'next/image';

const RightSidebar = () => {
  const users = [
    { id: 1, name: 'User 1', avatar: '/images/witcher.webp' },
    { id: 2, name: 'User 2', avatar: '/images/witcher.webp' },
    { id: 3, name: 'User 3', avatar: '/images/witcher.webp' },
    { id: 4, name: 'User 4', avatar: '/images/witcher.webp' },
    { id: 5, name: 'User 5', avatar: '/images/witcher.webp' },
    { id: 6, name: 'User 6', avatar: '/images/witcher.webp' },
    { id: 7, name: 'User 7', avatar: '/images/witcher.webp' },
  ];

  return (
    <aside className="w-20 p-4 border-l border-gray-200 flex flex-col items-center space-y-4">
      <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
        +
      </button>
      {users.map((user) => (
        <div key={user.id} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image src={user.avatar} alt={user.name} width={48} height={48} objectFit="cover" />
        </div>
      ))}
    </aside>
  );
};

export default RightSidebar;