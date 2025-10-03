import React from 'react';

const TouristCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        <p className="text-blue-600 font-bold text-xl mt-2">{price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TouristCard;