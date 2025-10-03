import React from 'react';
import heroImage from '../assets/images/hero-background.png';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <img src={heroImage} alt="Beautiful natural landscape" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
          Extraordinary natural and cultural charm
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Discover unique and unforgettable travel experiences.
        </p>
        <div className="mt-8 flex space-x-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
          <input type="text" placeholder="Where do you want to go?" className="bg-transparent text-white placeholder-gray-200 p-2 focus:outline-none" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;