import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { attractions } from '../data/mockData';
import { Filter, Ticket, SortAsc } from 'lucide-react';

const Attractions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('');
  const [attractionType, setAttractionType] = useState<string>('');

  const filteredAttractions = attractions.filter(attraction => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === '' || 
                         attraction.accessibilityFeatures.some(feature => feature.type === filterType);
    const matchesType = attractionType === '' || attraction.type === attractionType;
    return matchesSearch && matchesFilter && matchesType;
  });

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessible Attractions</h1>
              <p className="text-gray-600">
                Discover accessible tourist attractions and activities.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Ticket size={20} className="text-primary-600" />
              <span className="text-gray-600">{filteredAttractions.length} attractions available</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Attractions
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name..."
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

              <div className="md:col-span-2">
                <label htmlFor="attractionType" className="block text-sm font-medium text-gray-700 mb-1">
                  Attraction Type
                </label>
                <select
                  id="attractionType"
                  value={attractionType}
                  onChange={(e) => setAttractionType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Attractions</option>
                  <option value="museum">Museums</option>
                  <option value="park">Parks</option>
                  <option value="restaurant">Restaurants</option>
                  <option value="tour">Tours</option>
                  <option value="event">Events</option>
                  <option value="beach">Beaches</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAttractions.map(attraction => (
              <div key={attraction.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={attraction.imageUrl} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Ticket size={16} className="text-primary-600" />
                    <span className="text-sm text-gray-600 capitalize">{attraction.type}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{attraction.description}</p>
                  {attraction.price && (
                    <div className="text-primary-600 font-bold mb-2">
                      {attraction.price.amount === 0 
                        ? 'Free Entry'
                        : `${attraction.price.currency} ${attraction.price.amount}`
                      }
                    </div>
                  )}
                  <a 
                    href={`/attractions/${attraction.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredAttractions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No attractions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('');
                  setAttractionType('');
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

export default Attractions;