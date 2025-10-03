import React from 'react';
import testimonialAvatar from '../assets/images/testimonial-avatar.png';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="sr-only">Testimonials</h2>
        <div className="flex flex-col items-center">
          <img src={testimonialAvatar} alt="Testimonial author" className="w-16 h-16 rounded-full" />
          <h3 className="font-bold text-lg mt-4 text-gray-800">Ravel Daman</h3>
          <p className="text-sm text-gray-500">Traveler</p>
          <blockquote className="mt-6 text-xl text-gray-700 leading-relaxed italic">
            "This is the best website to find the perfect travel destination for me and my family. The booking process is very smooth, and the customer service is very helpful. We found the perfect place for our summer vacation, thank you!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;