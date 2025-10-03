import React from 'react';
import travelMemory1 from '../assets/images/travel-memory-1.png';
import travelMemory2 from '../assets/images/travel-memory-2.png';

const TravelMemories = () => {
  const memories = [
    {
      id: 1,
      image: travelMemory1,
      title: '2023 Travel Trends - What you need to know',
      author: 'By Ravel Daman',
      date: 'Aug 23, 2023',
    },
    {
      id: 2,
      image: travelMemory2,
      title: 'Best Adventure destinations for your next trip',
      author: 'By Ravel Daman',
      date: 'Aug 23, 2023',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Our travel memories</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {memories.map((memory) => (
          <div key={memory.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={memory.image} alt={memory.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">{memory.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{memory.author} | {memory.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelMemories;