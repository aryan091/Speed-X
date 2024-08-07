import React from 'react';

const MetricCard = ({ metrics }) => {
  return (
    <div className="task-card  p-6 bg-white rounded-lg shadow-xl relative w-full  sm:w-[30%] h-auto ">
      <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
        Performance Summary
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 font-semibold">Total Request Size:</p>
          <span className="font-bold text-purple-500">{metrics.totalRequestSize}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 font-semibold">Number of Requests:</p>
          <span className="font-bold text-purple-500">{metrics.numberOfRequests}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 font-semibold">Page Load Time:</p>
          <span className="font-bold text-purple-500">{metrics.lcp.display}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-500 font-semibold">Time:</p>
          <span className="font-bold text-purple-500">{new Date(metrics.timestamp).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
