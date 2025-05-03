import React from 'react';
import Medal from './Medal';

function Tooltip({ investor }) {
  if (!investor) return null;
  
  return (
    <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 w-64 z-20">
      <div className="text-center mb-2">
        <h4 className="font-bold text-blue-600">{investor.name}의 추천 종목</h4>
      </div>
      <div className="space-y-2">
        {investor.topStocks.map((stock, index) => (
          <div key={stock.symbol} className="flex items-center gap-2">
            <Medal rank={index + 1} />
            <div className="flex-1">
              <div className="font-medium text-sm">{stock.symbol}</div>
              <div className="text-xs text-gray-600">{stock.name}</div>
            </div>
            <div className="text-blue-600 font-bold text-sm">{stock.score.toFixed(1)}</div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
    </div>
  );
}

export default Tooltip;
