import React from 'react';
import DestinationCard from './Card/DestinationCard.jsx';
import { indonesianDestinations } from '../data/destinations.js';

const IndonesianTourism = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Indonesian tourism</h2>
      <p className="text-center text-gray-600 mt-2">Explore the beauty of Indonesia through its stunning destinations.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {indonesianDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            image={dest.image}
            title={dest.title}
            subtitle={dest.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default IndonesianTourism;