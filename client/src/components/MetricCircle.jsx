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
  
  const MetricCircle = ({ title, value, category, size, fixedSize }) => (
    <div
      className={`flex flex-col items-center mx-2 ${fixedSize} z-20 transform transition-transform duration-500 ease-in-out hover:scale-105`}
    >
      <div
        className={`${size} flex items-center justify-center shadow-2xl rounded-full border-4 ${getCircleColor(
          category
        )}`}
      >
        <span className="text-lg font-bold">{value}</span>
      </div>
      <span className="mt-2 text-sm font-bold text-center text-neutral-500 break-words w-full whitespace-normal">
        {title}
      </span>
    </div>
  );
  
  export default MetricCircle;
  