import React from 'react';
import InvestorCard from '../components/InvestorCard';

function HomePage({ investors, hoveredInvestor, onMouseEnter, onMouseLeave, onSelectInvestor }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-1">대가차트</h1>
        <h2 className="text-lg text-gray-600">부자 따라 투자하기</h2>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {investors.map(investor => (
          <InvestorCard 
            key={investor.id} 
            investor={investor}
            hoveredInvestor={hoveredInvestor}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onSelectInvestor}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
