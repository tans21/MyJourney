import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import IndonesianTourism from './components/IndonesianTourism.jsx';
import OneClick from './components/OneClick.jsx';
import TouristDestination from './components/TouristDestination.jsx';
import Testimonials from './components/Testimonials.jsx';
import TravelMemories from './components/TravelMemories.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <IndonesianTourism />
        <OneClick />
        <TouristDestination />
        <Testimonials />
        <TravelMemories />
      </main>
      <Footer />
    </div>
  );
}

export default App;