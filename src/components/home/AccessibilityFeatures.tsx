import React from 'react';
import { Armchair as Wheelchair, Eye, Ear, Brain, HeartPulse, Globe } from 'lucide-react';

const features = [
  {
    icon: <Wheelchair className="w-10 h-10 text-primary-600" />,
    title: 'Mobility Access',
    description: 'Information on wheelchair accessibility, ramps, elevators, and accessible bathrooms at each location.'
  },
  {
    icon: <Eye className="w-10 h-10 text-primary-600" />,
    title: 'Vision Features',
    description: 'Details about braille signage, tactile maps, audio guides, and other visual accessibility accommodations.'
  },
  {
    icon: <Ear className="w-10 h-10 text-primary-600" />,
    title: 'Hearing Support',
    description: 'Highlights venues with hearing loops, sign language support, and visual alert systems.'
  },
  {
    icon: <Brain className="w-10 h-10 text-primary-600" />,
    title: 'Cognitive Accessibility',
    description: 'Information on places with clear navigation, quiet spaces, and sensory-friendly environments.'
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-primary-600" />,
    title: 'Medical Support',
    description: 'Nearby medical facilities, pharmacies, and resources for travelers requiring medical attention.'
  },
  {
    icon: <Globe className="w-10 h-10 text-primary-600" />,
    title: 'Global Coverage',
    description: 'Growing database of accessibility information for destinations across six continents.'
  }
];

const AccessibilityFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Accessibility Information</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides detailed accessibility information to help you plan your perfect trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessibilityFeatures;