import React from 'react';
import MetricCircle from './MetricCircle'; // Assume MetricCircle is a custom component
import MetricCard from './MetricCard';
import './tooltip.css'; // Ensure this CSS file is updated accordingly

const PerformanceMetrics = ({ metrics }) => {
  // Helper function to categorize metrics
  const getPerformanceCategory = (score) => {
    if (score >= 90) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  const categorizeMetrics = (metricKey) => {
    switch (metricKey) {
      case 'performanceScore':
        return {
          title: 'Performance',
          desc: 'Overall Performance Score',
          display: metrics.performanceScore,
          category: getPerformanceCategory(metrics.performanceScore),
        };
      case 'fcp':
        return { title: 'FCP', desc: 'First Contentful Paint', display: metrics.fcp.display, category: metrics.fcp.category };
      case 'lcp':
        return { title: 'LCP', desc: 'Largest Contentful Paint', display: metrics.lcp.display, category: metrics.lcp.category };
      case 'cls':
        return { title: 'CLS', desc: 'Cumulative Layout Shift', display: metrics.cls.display, category: metrics.cls.category };
      case 'tbt':
        return { title: 'TBT', desc: 'Total Blocking Time', display: metrics.tbt.display, category: metrics.tbt.category };
      case 'speedIndex':
        return { title: 'Speed Index', desc: 'Speed Index Measurement', display: metrics.speedIndex.display, category: metrics.speedIndex.category };
      case 'interactive':
        return { title: 'Interactive', desc: 'Time to Interactive', display: metrics.interactive.display, category: metrics.interactive.category };
      default:
        return { title: metricKey, desc: 'Unknown Metric', display: 'Unknown', category: 'Unknown' };
    }
  };

  return (
    <div className="mx-4 z-40">
      <h2 className="text-2xl font-semibold mb-10 text-center text-purple-700">
        Performance Metrics
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Object.keys(metrics).map((key, index) => {
          if (key === 'performanceScore') return null;
          const { title, desc, display, category } = categorizeMetrics(key);
          const value = key === 'performanceScore' ? metrics[key] : metrics[key]?.rating;

          return (
            value !== undefined && (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center mb-6 group"
              >
                <MetricCircle
                  title={title}
                  value={Math.round(value * 10) / 10 || value}
                  category={category}
                  size="w-16 h-16"
                  fixedSize="w-24 h-24"
                  className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300"
                />
                <div className="tooltip">
                  {`${desc} : ${display}`}
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="mt-4 text-center flex justify-center flex-col-reverse sm:ml-0 sm:flex-row-reverse h-auto">
        <MetricCard metrics={metrics} />
        <div className="flex items-center justify-center w-[30%]  p-8 ml-28 sm:ml-8 h-[100%] ">
          <MetricCircle
            title="Performance"
            value={metrics.performanceScore}
            category={getPerformanceCategory(metrics.performanceScore)}
            size="w-32 h-40"
            fixedSize="w-32 h-40"
            className="w-32 h-40 flex items-center justify-center rounded-full border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
