import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center text-white">
      <div className="text-xl font-bold">Logo</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
        <a href="#" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Packages</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="hidden md:block">Login</button>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;