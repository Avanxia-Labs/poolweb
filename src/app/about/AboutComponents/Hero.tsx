import React from 'react';

const Section1 = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center md:justify-between md:gap-8">
            {/* Logo/Image Side */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
              <div className="w-full max-w-md">
                <img 
                  src="/path/to/logo-large.png" 
                  alt="Pool Quality Solutions Inc Logo" 
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Text Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Let's work together!</h1>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">The Pool Quality Cleaning Difference</h3>
              <p className="text-gray-700 mb-6">
                We're here to help you enjoy your pool again. Complete the form and we'll be in touch within the next 24 hours.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                GET YOUR FREE ESTIMATE
              </button>
            </div>
          </div>
          
          {/* Stats Container */}
          <div className="flex flex-col md:flex-row justify-center md:justify-around mt-12 md:mt-16 gap-8 md:gap-4">
            {/* Stat Item 1 */}
            <div className="text-center">
              <div className="flex justify-center items-baseline">
                <span className="text-4xl md:text-5xl font-bold text-blue-600">30</span>
                <span className="text-2xl md:text-3xl font-bold text-blue-600">+</span>
              </div>
              <p className="mt-2 text-gray-700">Years Providing Quality Pool Services</p>
            </div>
            
            {/* Stat Item 2 */}
            <div className="text-center">
              <div className="flex justify-center items-baseline">
                <span className="text-4xl md:text-5xl font-bold text-blue-600">750</span>
                <span className="text-2xl md:text-3xl font-bold text-blue-600">+</span>
              </div>
              <p className="mt-2 text-gray-700">High-Quality Pools Constructed</p>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Section1;