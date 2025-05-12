import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { attractions, destinations, accommodations, transportations } from '../data/mockData';
import { MapPin, Ticket, Check } from 'lucide-react';
import TicketBooking from '../components/attractions/TicketBooking';
import QuickLinks from '../components/QuickLinks';

interface AttractionDetailProps {
  id: string;
}

const AttractionDetail: React.FC<AttractionDetailProps> = ({ id }) => {
  const [showTicketBooking, setShowTicketBooking] = useState(false);
  const attraction = attractions.find(a => a.id === id);
  
  if (!attraction) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Attraction not found</h1>
        </div>
      </Layout>
    );
  }

  const destination = destinations.find(d => d.id === attraction.destinationId);
  const relatedAccommodations = accommodations.filter(a => a.destinationId === attraction.destinationId);
  const relatedTransportation = transportations.filter(t => t.destinationId === attraction.destinationId);

  const handleExploreArea = () => {
    window.location.href = `/explore/${attraction.destinationId}?name=${encodeURIComponent(destination?.name || '')}&address=${encodeURIComponent(attraction.address)}`;
  };

  return (
    <Layout>
      <div className="relative h-96">
        <img 
          src={attraction.imageUrl} 
          alt={attraction.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} />
              <span>{attraction.address}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{attraction.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Ticket size={20} />
                <span>{attraction.type}</span>
              </div>
              {attraction.price && (
                <>
                  <span>•</span>
                  <span>
                    {attraction.price.amount === 0 
                      ? 'Free Entry'
                      : `${attraction.price.currency} ${attraction.price.amount}`
                    }
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{attraction.description}</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {attraction.accessibilityFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Check size={20} className="text-green-500" />
                      <h3 className="font-semibold">{feature.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Visit Information</h2>
                {attraction.price && (
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-700 mb-2">Entry Fee</h3>
                    <div className="text-2xl font-bold text-primary-600">
                      {attraction.price.amount === 0 
                        ? 'Free Entry'
                        : `${attraction.price.currency} ${attraction.price.amount}`
                      }
                    </div>
                  </div>
                )}
                <button 
                  onClick={() => setShowTicketBooking(true)}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Plan Your Visit
                </button>
              </section>

              <QuickLinks 
                accommodationsCount={relatedAccommodations.length}
                transportationCount={relatedTransportation.length}
                attractionsCount={attractions.filter(a => a.destinationId === attraction.destinationId).length}
              />

              {destination && (
                <section className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Location</h2>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium">{destination.name}</p>
                      <p className="text-gray-600 text-sm">{attraction.address}</p>
                      <button 
                        onClick={handleExploreArea}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2"
                      >
                        Explore the area
                      </button>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      {showTicketBooking && attraction.price && (
        <TicketBooking
          attractionName={attraction.name}
          price={attraction.price}
          onClose={() => setShowTicketBooking(false)}
        />
      )}
    </Layout>
  );
};

export default AttractionDetail;