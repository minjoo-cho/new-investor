import React from 'react';

function Medal({ rank }) {
  const colors = {
    1: 'bg-yellow-500',
    2: 'bg-gray-300',
    3: 'bg-amber-600',
  };
  
  return (
    <div className={`${colors[rank] || 'bg-blue-200'} w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-xs`}>
      {rank}
    </div>
  );
}

export default Medal;
