import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary-600 overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          opacity: 0.4 
        }} 
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Travel Without Limits
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl">
            Discover accessible destinations, accommodations, and experiences tailored to your needs.
          </p>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <form className="grid gap-4 md:grid-cols-11">
              <div className="md:col-span-4">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Where to?</label>
                <input
                  type="text"
                  id="destination"
                  placeholder="City or destination"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div className="md:col-span-3">
                <label htmlFor="accessibilityNeeds" className="block text-sm font-medium text-gray-700 mb-1">Accessibility Needs</label>
                <select
                  id="accessibilityNeeds"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Any</option>
                  <option value="mobility">Mobility</option>
                  <option value="vision">Vision</option>
                  <option value="hearing">Hearing</option>
                  <option value="cognitive">Cognitive</option>
                  <option value="sensory">Sensory</option>
                </select>
              </div>
              
              <div className="md:col-span-3">
                <label htmlFor="searchType" className="block text-sm font-medium text-gray-700 mb-1">Looking for</label>
                <select
                  id="searchType"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">Everything</option>
                  <option value="accommodations">Accommodations</option>
                  <option value="attractions">Attractions</option>
                  <option value="transportation">Transportation</option>
                </select>
              </div>
              
              <div className="md:col-span-1 flex items-end">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white p-3 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 h-[46px] flex items-center justify-center"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;