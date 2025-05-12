import React from 'react';
import Layout from '../components/layout/Layout';
import { MapPin, Navigation, Star, Clock, Phone } from 'lucide-react';

interface ExploreAreaProps {
  location: string;
  address: string;
}

const ExploreArea: React.FC<ExploreAreaProps> = ({ location, address }) => {
  // Mock nearby places data
  const nearbyPlaces = [
    {
      name: "Central Park",
      type: "Park",
      distance: "0.5 km",
      rating: 4.5,
      address: "Park Street, City Center",
      openHours: "6:00 AM - 9:00 PM",
      phone: "+1 234-567-8900",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
    },
    {
      name: "Museum of Modern Art",
      type: "Museum",
      distance: "1.2 km",
      rating: 4.8,
      address: "Art Avenue, Cultural District",
      openHours: "10:00 AM - 6:00 PM",
      phone: "+1 234-567-8901",
      image: "https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg"
    },
    {
      name: "Riverside Restaurant",
      type: "Restaurant",
      distance: "0.8 km",
      rating: 4.3,
      address: "River Road 123",
      openHours: "11:00 AM - 11:00 PM",
      phone: "+1 234-567-8902",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
    },
    {
      name: "Shopping Mall",
      type: "Shopping",
      distance: "1.5 km",
      rating: 4.4,
      address: "Commerce Street 45",
      openHours: "10:00 AM - 9:00 PM",
      phone: "+1 234-567-8903",
      image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore {location}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2" />
              <span>{address}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{place.name}</h3>
                      <span className="text-sm text-gray-600">{place.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="ml-1">{place.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Navigation size={16} className="mr-2" />
                      <span>{place.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{place.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{place.openHours}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2" />
                      <span>{place.phone}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' ' + place.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExploreArea;