import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { transportations } from '../data/mockData';
import { Filter, Bus, SortAsc } from 'lucide-react';

const Transportation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('');

  const filteredTransportation = transportations.filter(transport => {
    const matchesSearch = transport.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === '' || 
                         transport.accessibilityFeatures.some(feature => feature.type === filterType);
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessible Transportation</h1>
              <p className="text-gray-600">
                Find accessible transportation options for your journey.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Bus size={20} className="text-primary-600" />
              <span className="text-gray-600">{filteredTransportation.length} options available</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Transportation
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
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTransportation.map(transport => (
              <div key={transport.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={transport.imageUrl} 
                  alt={transport.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bus size={16} className="text-primary-600" />
                    <span className="text-sm text-gray-600 capitalize">{transport.type}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{transport.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{transport.description}</p>
                  <a 
                    href={`/transportation/${transport.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredTransportation.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No transportation options found matching your criteria.</p>
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

export default Transportation;