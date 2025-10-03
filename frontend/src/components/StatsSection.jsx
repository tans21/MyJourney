import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '1M+', label: 'Tourists' },
    { value: '12K', label: 'Destinations' },
    { value: '4.8', label: 'Ratings' },
    { value: '2M+', label: 'Reviews' },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-800">{stat.value}</span>
            <span className="text-gray-500 mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;