import React from 'react';

const DestinationCard = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default DestinationCard;