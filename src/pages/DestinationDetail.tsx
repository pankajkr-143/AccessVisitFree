import React from 'react';
import Layout from '../components/layout/Layout';
import { destinations, accommodations, attractions, transportations } from '../data/mockData';
import { MapPin, Star, Hotel, Bus, Ticket } from 'lucide-react';
import QuickLinks from '../components/QuickLinks';

interface DestinationDetailProps {
  id: string;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ id }) => {
  const destination = destinations.find(d => d.id === id);
  
  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Destination not found</h1>
        </div>
      </Layout>
    );
  }

  const relatedAccommodations = accommodations.filter(a => a.destinationId === id);
  const relatedAttractions = attractions.filter(a => a.destinationId === id);
  const relatedTransportation = transportations.filter(t => t.destinationId === id);

  return (
    <Layout>
      <div className="relative h-96">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star size={20} fill="currentColor" className="text-yellow-400" />
                <span className="text-xl">{destination.accessibilityScore.toFixed(1)}</span>
              </div>
              <span>•</span>
              <span>{destination.reviewCount} reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{destination.description}</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 border rounded-lg"
                  >
                    <h3 className="font-semibold mb-2">{feature.name}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="accommodations" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Accommodations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedAccommodations.map(accommodation => (
                  <div key={accommodation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={accommodation.imageUrl} 
                      alt={accommodation.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Hotel size={16} className="text-primary-600" />
                        <span className="text-sm text-gray-600 capitalize">{accommodation.type}</span>
                      </div>
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
            </section>

            <section id="transportation" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Transportation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedTransportation.map(transport => (
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
            </section>

            <section id="attractions" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedAttractions.map(attraction => (
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
                      <div className="flex justify-between items-center">
                        {attraction.price && (
                          <div className="text-primary-600 font-bold">
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
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <QuickLinks 
                accommodationsCount={relatedAccommodations.length}
                transportationCount={relatedTransportation.length}
                attractionsCount={relatedAttractions.length}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationDetail;