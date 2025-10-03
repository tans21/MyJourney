import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-xl">Travel Guide</h4>
          <p className="mt-4 text-sm max-w-xs">
            A travel guide platform that provides information and inspiration for your next travel destination.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Support</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Follow Us</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; 2023 Travel Guide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;