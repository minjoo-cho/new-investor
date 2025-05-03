import React from 'react';
import Medal from './Medal';
import Tooltip from './Tooltip';

function InvestorCard({ investor, hoveredInvestor, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div 
      className="relative group cursor-pointer transition-all hover:shadow-lg bg-white rounded-lg overflow-hidden transform hover:-translate-y-1" 
      onClick={() => onClick(investor)}
      onMouseEnter={() => onMouseEnter(investor)}
      onMouseLeave={onMouseLeave}
      style={{transition: "all 0.3s ease"}}
    >
      {hoveredInvestor && hoveredInvestor.id === investor.id && (
        <Tooltip investor={investor} />
      )}
      
      <div className="relative h-48" style={{background: "linear-gradient(to bottom, #f0f9ff, #e2e8f0)"}}>
        {/* 투자자 이미지 */}
        <img 
          src={investor.image} 
          alt={investor.name} 
          className="absolute w-32 h-32 rounded-full border-4 border-white shadow-lg"
          style={{
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            objectFit: "cover"
          }}
        />
        
        {/* 포트폴리오 링크 */}
        <div className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
          {investor.portfolioLink}
        </div>
        
        {/* 이름과 철학 */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-3 pt-6">
          <h3 className="text-lg font-bold text-white text-center">{investor.name}</h3>
          <p className="text-xs text-white opacity-90 text-center">{investor.philosophy}</p>
        </div>
      </div>
      
      <div className="p-3">
        <div className="text-xs grid grid-cols-2 gap-x-1 gap-y-0.5 mb-2">
          <div className="flex justify-between">
            <span className="text-gray-500">연령:</span>
            <span>{investor.age}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">자산:</span>
            <span>{investor.assets}</span>
          </div>
          <div className="col-span-2 flex justify-between">
            <span className="text-gray-500">성과:</span>
            <span className="text-right flex-1 pl-1">{investor.performance}</span>
          </div>
          <div className="col-span-2 flex justify-between">
            <span className="text-gray-500">특징:</span>
            <span className="text-right flex-1 pl-1">{investor.characteristics}</span>
          </div>
        </div>
        
        <div className="border-t pt-2 mt-1">
          <div className="text-xs font-medium mb-1">추천 종목</div>
          <div className="space-y-1">
            {investor.topStocks.map((stock, index) => (
              <div key={stock.symbol} className="flex items-center gap-1 text-xs">
                <Medal rank={index + 1} />
                <span className="font-medium">{stock.symbol}</span>
                <span className="text-gray-600 text-xs ml-1">{stock.name}</span>
                <span className="text-blue-600 text-xs ml-auto">{stock.score.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorCard;
