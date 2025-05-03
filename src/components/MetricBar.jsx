import React from 'react';

function MetricBar({ metric }) {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <span className="font-medium">{metric.displayName}:</span>
      </div>
      <div className="w-1/2">
        <div className="flex items-center">
          <div className="h-2 bg-gray-200 rounded-full flex-1 mr-2">
            <div 
              className="h-full bg-blue-600 rounded-full" 
              style={{ width: `${metric.weight * 100}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">{Math.round(metric.weight * 100)}%</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {metric.criteria}
        </div>
      </div>
    </div>
  );
}

export default MetricBar;
