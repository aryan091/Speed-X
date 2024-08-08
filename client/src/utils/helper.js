/**
 * Determines the color classes based on the category.
 *
 * @param {string} category - The category to determine the color classes for.
 * @return {string} The color classes corresponding to the category.
 */

const getCircleColor = (category) => {
    switch (category) {
      case 'Good':
        return 'text-green-500 border-green-500';
      case 'Needs Improvement':
        return 'text-yellow-500 border-yellow-500';
      case 'Poor':
        return 'text-red-500 border-red-500';
      default:
        return 'text-gray-500 border-gray-400';
    }
  };

  /**
 * Determines the performance category based on the score.
 *
 * @param {number} score - The score to determine the category for.
 * @return {string} The performance category corresponding to the score.
 */

  const getPerformanceCategory = (score) => {
    if (score >= 90) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  /**
 * Categorizes metrics based on the given metric key.
 *
 * @param {string} metricKey - The key of the metric to categorize.
 * @return {Object} An object containing the title, description, display, and category of the metric.
 */

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

  export { getCircleColor , getPerformanceCategory , categorizeMetrics}