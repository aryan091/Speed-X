// Helper function to determine the metric score category
const getScoreCategory = (score) => {
    if (score >= 0.9) {
      return 'Good';
    } else if (score >= 0.5) {
      return 'Needs Improvement';
    } else {
      return 'Poor';
    }
  };
  

export{getScoreCategory}