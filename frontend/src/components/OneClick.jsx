import React from 'react';
import oneClickImage from '../assets/images/one-click-destination.png';

const OneClick = () => {
  const destinations = [
    { id: 1, name: 'Taman Safari', description: 'Safari experience with various animals.' },
    { id: 2, name: 'Borobudur Temple', description: 'Explore the historical and ancient temple.' },
    { id: 3, name: 'Mount Bromo', description: 'Hike to an active volcano for an amazing sunrise view.' },
    { id: 4, name: 'Lake Toba', description: 'Relax by the largest volcanic lake in the world.' },
    { id: 5, name: 'Komodo Island', description: 'See the giant Komodo dragons in their natural habitat.' },
  ];

  return (
    <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <img src={oneClickImage} alt="Traveler on a beach" className="rounded-xl shadow-lg" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">One click for you</h2>
        <p className="mt-2 text-gray-600">Find and book your next trip with ease, tailored just for you.</p>
        <ul className="mt-6 space-y-4">
          {destinations.map((dest) => (
            <li key={dest.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xl font-bold text-blue-600">{dest.id}</span>
              <div>
                <h4 className="font-semibold text-gray-800">{dest.name}</h4>
                <p className="text-sm text-gray-500">{dest.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OneClick;