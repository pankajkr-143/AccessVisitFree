import React from 'react';
import Layout from '../components/layout/Layout';
import { transportations, destinations, accommodations, attractions } from '../data/mockData';
import { MapPin, Bus, Check } from 'lucide-react';
import QuickLinks from '../components/QuickLinks';

interface TransportationDetailProps {
  id: string;
}

const TransportationDetail: React.FC<TransportationDetailProps> = ({ id }) => {
  const transportation = transportations.find(t => t.id === id);
  
  if (!transportation) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Transportation option not found</h1>
        </div>
      </Layout>
    );
  }

  const destination = destinations.find(d => d.id === transportation.destinationId);
  const relatedAccommodations = accommodations.filter(a => a.destinationId === transportation.destinationId);
  const relatedAttractions = attractions.filter(a => a.destinationId === transportation.destinationId);

  const handleExploreArea = () => {
    window.location.href = `/explore/${transportation.destinationId}?name=${encodeURIComponent(destination?.name || '')}`;
  };

  const handleCheckSchedule = () => {
    window.location.href = `/schedule/${transportation.id}?name=${encodeURIComponent(transportation.name)}&type=${encodeURIComponent(transportation.type)}`;
  };

  return (
    <Layout>
      <div className="relative h-96">
        <img 
          src={transportation.imageUrl} 
          alt={transportation.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            {destination && (
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={20} />
                <span>{destination.name}</span>
              </div>
            )}
            <h1 className="text-4xl font-bold mb-4">{transportation.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Bus size={20} />
                <span className="capitalize">{transportation.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{transportation.description}</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transportation.accessibilityFeatures.map((feature, index) => (
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
                <h2 className="text-xl font-bold mb-4">Service Information</h2>
                <button 
                  onClick={handleCheckSchedule}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Check Schedule
                </button>
              </section>

              <QuickLinks 
                accommodationsCount={relatedAccommodations.length}
                transportationCount={transportations.filter(t => t.destinationId === transportation.destinationId).length}
                attractionsCount={relatedAttractions.length}
              />

              {destination && (
                <section className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Location</h2>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium">{destination.name}</p>
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
    </Layout>
  );
};

export default TransportationDetail;