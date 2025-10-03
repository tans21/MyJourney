import React from 'react';
import TouristCard from './Card/TouristCard.jsx';
import { touristDestinations } from '../data/destinations.js';

const TouristDestination = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Our tourist destination</h2>
      <p className="text-center text-gray-600 mt-2">Find the best destinations for your next adventure.</p>
      <div className="flex overflow-x-auto space-x-6 py-8 px-2 -mx-2">
        {touristDestinations.map((dest) => (
          <div key={dest.id} className="flex-none w-72">
            <TouristCard image={dest.image} title={dest.title} price={dest.price} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TouristDestination;