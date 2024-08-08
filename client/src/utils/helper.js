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


  export { getCircleColor , getPerformanceCategory }