import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { destinations } from '../data/mockData';
import { MapPin, Search, Filter } from 'lucide-react';

const AllCities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // Get unique countries
  const countries = Array.from(new Set(destinations.map(d => d.country)));

  const filteredCities = destinations.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || city.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore All Cities</h1>
            <p className="text-xl text-gray-600">
              Discover accessible destinations across India
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  <Search size={16} className="inline mr-2" />
                  Search Cities
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Enter city name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  <Filter size={16} className="inline mr-2" />
                  Filter by Country
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Countries</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCities.map(city => (
              <a
                key={city.id}
                href={`/destinations/${city.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{city.name}</h3>
                    <div className="flex items-center text-white/90 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{city.country}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{city.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center text-primary-600">
                      <span className="text-sm font-medium">{city.accessibilityScore.toFixed(1)} accessibility score</span>
                    </div>
                    <span className="text-sm text-gray-500">{city.reviewCount} reviews</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No cities found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('');
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllCities;