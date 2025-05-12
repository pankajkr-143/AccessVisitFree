import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { accommodations, destinations, transportations, attractions } from '../data/mockData';
import { MapPin, Star, Bed, Check } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm';
import QuickLinks from '../components/QuickLinks';

interface AccommodationDetailProps {
  id: string;
}

const AccommodationDetail: React.FC<AccommodationDetailProps> = ({ id }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const accommodation = accommodations.find(a => a.id === id);
  
  if (!accommodation) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Accommodation not found</h1>
        </div>
      </Layout>
    );
  }

  const destination = destinations.find(d => d.id === accommodation.destinationId);
  const relatedTransportation = transportations.filter(t => t.destinationId === accommodation.destinationId);
  const relatedAttractions = attractions.filter(a => a.destinationId === accommodation.destinationId);

  const handleExploreArea = () => {
    window.location.href = `/explore/${accommodation.destinationId}?name=${encodeURIComponent(destination?.name || '')}&address=${encodeURIComponent(accommodation.address)}`;
  };

  return (
    <Layout>
      <div className="relative h-96">
        <img 
          src={accommodation.imageUrl} 
          alt={accommodation.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} />
              <span>{accommodation.address}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{accommodation.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star size={20} fill="currentColor" className="text-yellow-400" />
                <span className="text-xl">{accommodation.rating.toFixed(1)}</span>
              </div>
              <span>•</span>
              <span>{accommodation.reviewCount} reviews</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Bed size={20} />
                <span>{accommodation.type}</span>
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
              <p className="text-gray-600">{accommodation.description}</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accommodation.accessibilityFeatures.map((feature, index) => (
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
                <h2 className="text-xl font-bold mb-4">Price</h2>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {accommodation.price.currency} {accommodation.price.amount}
                </div>
                <p className="text-gray-600 text-sm mb-4">per night</p>
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Book Now
                </button>
              </section>

              <QuickLinks 
                accommodationsCount={accommodations.filter(a => a.destinationId === accommodation.destinationId).length}
                transportationCount={relatedTransportation.length}
                attractionsCount={relatedAttractions.length}
              />

              {destination && (
                <section className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Location</h2>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium">{destination.name}</p>
                      <p className="text-gray-600 text-sm">{accommodation.address}</p>
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

      {showBookingForm && (
        <BookingForm
          itemName={accommodation.name}
          itemType="accommodation"
          price={accommodation.price}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </Layout>
  );
};

export default AccommodationDetail;