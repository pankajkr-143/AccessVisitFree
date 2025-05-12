import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Destination } from '../../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={`Scenic view of ${destination.name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="font-medium text-sm">{destination.accessibilityScore.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-600 mb-1">
          <MapPin size={14} className="mr-1" />
          <span className="text-sm">{destination.country}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {destination.features.slice(0, 2).map((feature, index) => (
            <span 
              key={index}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
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
          {destination.features.length > 2 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">
              +{destination.features.length - 2} more
            </span>
          )}
        </div>
        
        <a
          href={`/destinations/${destination.id}`}
          className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label={`View details for ${destination.name}`}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;