import React from 'react';
import { Star, ThumbsUp, MapPin } from 'lucide-react';
import { destinations } from '../../data/mockData';

const FeaturedDestinations: React.FC = () => {
  // Show top 3 destinations by accessibility score
  const topDestinations = [...destinations]
    .sort((a, b) => (b.accessibilityScore || 0) - (a.accessibilityScore || 0))
    .slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Accessible Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top-rated destinations with excellent accessibility features and positive community reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.imageUrl} 
                  alt={`Scenic view of ${destination.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-medium text-sm">{(destination.accessibilityScore || 0).toFixed(1)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.country}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {destination.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(destination.features || []).slice(0, 3).map((feature, index) => (
                    <span 
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        feature.type === 'mobility' ? 'bg-blue-100 text-blue-800' :
                        feature.type === 'vision' ? 'bg-purple-100 text-purple-800' :
                        feature.type === 'hearing' ? 'bg-green-100 text-green-800' :
                        feature.type === 'sensory' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {feature.name}
                    </span>
                  ))}
                  {(destination.features || []).length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                      +{destination.features.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <ThumbsUp size={16} className="mr-1" />
                    <span>{destination.reviewCount} reviews</span>
                  </div>
                  <a
                    href={`/destinations/${destination.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/destinations"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Explore All Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;