import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1524401033441-f919f2547fb9?auto=format&fit=crop&q=80"
        alt="Grandmother reading with grandchild"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl font-serif mb-6">
            We tailor Medicare plans so you can live worry-free
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Expert guidance to help you navigate Medicare with confidence. Get personalized support from our licensed advisors.
          </p>
          <button className="bg-teal-500 text-white px-8 py-3 rounded-md text-lg hover:bg-teal-600 transition-colors">
            Get 1-on-1 Assistance
          </button>
        </div>
      </div>
    </div>
  );
}