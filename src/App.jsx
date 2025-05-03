import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import investors from './data/investors';

function App() {
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [hoveredInvestor, setHoveredInvestor] = useState(null);
  
  const handleSelectInvestor = (investor) => {
    setSelectedInvestor(investor);
    setHoveredInvestor(null);
  };
  
  const handleBack = () => {
    setSelectedInvestor(null);
  };

  const handleMouseEnter = (investor) => {
    setHoveredInvestor(investor);
  };

  const handleMouseLeave = () => {
    setHoveredInvestor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div 
            className="font-bold text-xl cursor-pointer" 
            onClick={handleBack}
          >
            부자따라 부자되기
          </div>
          {selectedInvestor && (
            <div className="text-sm text-gray-600">
              {selectedInvestor.name}의 투자 전략
            </div>
          )}
        </div>
      </nav>
      
      {selectedInvestor ? (
        <DetailPage 
          investor={selectedInvestor} 
          onBack={handleBack} 
        />
      ) : (
        <HomePage 
          investors={investors} 
          hoveredInvestor={hoveredInvestor}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onSelectInvestor={handleSelectInvestor}
        />
      )}
      
      <footer className="bg-gray-800 text-white p-4 text-center text-sm mt-auto">
        <p>© 2025 부자따라 부자되기. 모든 권리 보유.</p>
      </footer>
    </div>
  );
}

export default App;
