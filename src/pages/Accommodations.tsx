import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { accommodations } from '../data/mockData';
import { Filter, Bed, SortAsc } from 'lucide-react';

const Accommodations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');

  const filteredAccommodations = accommodations.filter(accommodation => {
    const matchesSearch = accommodation.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === '' || 
                         accommodation.accessibilityFeatures.some(feature => feature.type === filterType);
    return matchesSearch && matchesFilter;
  });

  const sortedAccommodations = [...filteredAccommodations].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessible Accommodations</h1>
              <p className="text-gray-600">
                Find comfortable and accessible places to stay during your travels.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Bed size={20} className="text-primary-600" />
              <span className="text-gray-600">{sortedAccommodations.length} accommodations available</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Accommodations
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Hotel or resort name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

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
                  <option value="rating">Rating</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedAccommodations.map(accommodation => (
              <div key={accommodation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={accommodation.imageUrl} 
                  alt={accommodation.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{accommodation.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{accommodation.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-primary-600 font-bold">
                      {accommodation.price.currency} {accommodation.price.amount}
                    </div>
                    <a 
                      href={`/accommodations/${accommodation.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedAccommodations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No accommodations found matching your criteria.</p>
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

export default Accommodations;