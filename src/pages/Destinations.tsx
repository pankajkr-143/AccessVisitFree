import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import DestinationCard from '../components/destinations/DestinationCard';
import { destinations } from '../data/mockData';
import { Filter, MapPin, SortAsc } from 'lucide-react';

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');

  // Filter destinations based on search term and filter type
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === '' || 
                         destination.features.some(feature => feature.type === filterType);
    
    return matchesSearch && matchesFilter;
  });

  // Sort destinations
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.accessibilityScore - a.accessibilityScore;
    }
  });

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessible Destinations</h1>
              <p className="text-gray-600">
                Discover destinations with verified accessibility information from around the world.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <MapPin size={20} className="text-primary-600" />
              <span className="text-gray-600">{sortedDestinations.length} destinations available</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search input */}
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Destinations
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="City or country name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Filter by accessibility type */}
              <div className="md:col-span-2">
                <label htmlFor="filterType" className="block text-sm font-medium text-gray-700 mb-1">
                  <Filter size={16} className="inline mr-1" />
                  Filter by Accessibility
                </label>
                <select
                  id="filterType"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Types</option>
                  <option value="mobility">Mobility</option>
                  <option value="vision">Vision</option>
                  <option value="hearing">Hearing</option>
                  <option value="cognitive">Cognitive</option>
                  <option value="sensory">Sensory</option>
                </select>
              </div>

              {/* Sort options */}
              <div>
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                  <SortAsc size={16} className="inline mr-1" />
                  Sort By
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="rating">Accessibility Rating</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {sortedDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No destinations found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('');
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

export default Destinations;