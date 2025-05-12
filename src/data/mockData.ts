import { Destination, Accommodation, Transportation, Attraction, AccessibilityFeature } from '../types';

export const accessibilityFeatures: Record<string, AccessibilityFeature> = {
  wheelchairRamps: {
    type: 'mobility',
    name: 'Wheelchair Ramps',
    description: 'Dedicated ramps for wheelchair access',
    verified: true
  },
  elevators: {
    type: 'mobility',
    name: 'Elevators',
    description: 'Accessible elevators with braille buttons and voice announcements',
    verified: true
  },
  accessibleBathroom: {
    type: 'mobility',
    name: 'Accessible Bathroom',
    description: 'Wheelchair-accessible bathrooms with grab bars',
    verified: true
  },
  visualSignage: {
    type: 'vision',
    name: 'Visual Signage',
    description: 'High-contrast, large-print signage throughout',
    verified: true
  },
  brailleInfo: {
    type: 'vision',
    name: 'Braille Information',
    description: 'Information available in braille format',
    verified: true
  },
  hearingLoop: {
    type: 'hearing',
    name: 'Hearing Loop System',
    description: 'Hearing loop system installed for hearing aid users',
    verified: true
  },
  signLanguage: {
    type: 'hearing',
    name: 'Sign Language Support',
    description: 'Staff trained in sign language or interpreters available',
    verified: false
  },
  quietSpaces: {
    type: 'sensory',
    name: 'Quiet Spaces',
    description: 'Designated quiet areas for sensory needs',
    verified: true
  },
  serviceAnimals: {
    type: 'mobility',
    name: 'Service Animals Welcomed',
    description: 'Service animals are accommodated and welcomed',
    verified: true
  },
  assistedListening: {
    type: 'hearing',
    name: 'Assisted Listening Devices',
    description: 'Devices available to amplify sound for hearing impaired visitors',
    verified: true
  },
  tactilePaving: {
    type: 'vision',
    name: 'Tactile Paving',
    description: 'Textured ground surface to assist navigation',
    verified: true
  },
  mobilityScooters: {
    type: 'mobility',
    name: 'Mobility Scooters',
    description: 'Rental mobility scooters available',
    verified: true
  },
  audioDescriptions: {
    type: 'vision',
    name: 'Audio Descriptions',
    description: 'Detailed audio descriptions of surroundings and exhibits',
    verified: true
  }
};

export const destinations: Destination[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    description: 'Financial capital with accessible beaches and cultural sites.',
    imageUrl: 'https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg',
    accessibilityScore: 4.0,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.hearingLoop
    ],
    reviewCount: 142
  },
  {
    id: 'delhi',
    name: 'Delhi',
    country: 'India',
    description: "India's capital with accessible historical monuments and modern infrastructure.",
    imageUrl: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    accessibilityScore: 4.2,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.visualSignage,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 156
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    country: 'India',
    description: 'Tech hub with modern accessible infrastructure and gardens.',
    imageUrl: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
    accessibilityScore: 4.4,
    features: [
      accessibilityFeatures.elevators,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.hearingLoop
    ],
    reviewCount: 134
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    description: 'Pink City with accessible heritage sites and adapted palace tours.',
    imageUrl: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    accessibilityScore: 4.1,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage,
      accessibilityFeatures.quietSpaces
    ],
    reviewCount: 98
  },
  {
    id: 'agra',
    name: 'Agra',
    country: 'India',
    description: 'Home to the accessible Taj Mahal with specialized viewing areas.',
    imageUrl: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
    accessibilityScore: 4.0,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 112
  },
  {
    id: 'shimla',
    name: 'Shimla',
    country: 'India',
    description: 'Accessible hill station with adapted heritage walks.',
    imageUrl: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    accessibilityScore: 3.8,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.quietSpaces
    ],
    reviewCount: 76
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    country: 'India',
    description: 'Holy city with accessible ghats and spiritual experiences.',
    imageUrl: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg',
    accessibilityScore: 3.8,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.quietSpaces,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 88
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    country: 'India',
    description: 'Historic city with modern IT infrastructure and accessible tourist spots.',
    imageUrl: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    accessibilityScore: 4.3,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.brailleInfo
    ],
    reviewCount: 128
  },
  {
    id: 'chennai',
    name: 'Chennai',
    country: 'India',
    description: 'Cultural capital with accessible beaches and temples.',
    imageUrl: 'https://images.pexels.com/photos/2389418/pexels-photo-2389418.jpeg',
    accessibilityScore: 4.2,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.tactilePaving,
      accessibilityFeatures.audioDescriptions
    ],
    reviewCount: 145
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    country: 'India',
    description: 'City of joy with accessible heritage buildings and cultural venues.',
    imageUrl: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg',
    accessibilityScore: 4.0,
    features: [
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.assistedListening,
      accessibilityFeatures.brailleInfo
    ],
    reviewCount: 132
  },
  // New destinations
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    description: 'Beach paradise with accessible resorts and water activities.',
    imageUrl: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg',
    accessibilityScore: 4.3,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 167
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    country: 'India',
    description: 'City of Lakes with adapted palace tours and accessible boat rides.',
    imageUrl: 'https://images.pexels.com/photos/3581353/pexels-photo-3581353.jpeg',
    accessibilityScore: 4.1,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.audioDescriptions
    ],
    reviewCount: 98
  },
  {
    id: 'mysore',
    name: 'Mysore',
    country: 'India',
    description: 'Heritage city with accessible palace and gardens.',
    imageUrl: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    accessibilityScore: 4.2,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.quietSpaces
    ],
    reviewCount: 112
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    country: 'India',
    description: 'Spiritual hub with accessible yoga centers and river activities.',
    imageUrl: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg',
    accessibilityScore: 3.9,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.quietSpaces,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 89
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    country: 'India',
    description: 'Holy city with accessible Golden Temple and cultural sites.',
    imageUrl: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg',
    accessibilityScore: 4.0,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.assistedListening,
      accessibilityFeatures.visualSignage
    ],
    reviewCount: 143
  },
  {
    id: 'kochi',
    name: 'Kochi',
    country: 'India',
    description: 'Coastal city with accessible backwater tours and cultural experiences.',
    imageUrl: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg',
    accessibilityScore: 4.1,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.audioDescriptions
    ],
    reviewCount: 121
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    country: 'India',
    description: 'Hill station with accessible tea gardens and mountain views.',
    imageUrl: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    accessibilityScore: 3.8,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.quietSpaces,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 87
  },
  {
    id: 'pune',
    name: 'Pune',
    country: 'India',
    description: 'Cultural hub with accessible museums and historical sites.',
    imageUrl: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
    accessibilityScore: 4.2,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.brailleInfo
    ],
    reviewCount: 134
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    country: 'India',
    description: 'Heritage city with accessible old town and modern amenities.',
    imageUrl: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    accessibilityScore: 4.0,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.tactilePaving,
      accessibilityFeatures.hearingLoop
    ],
    reviewCount: 156
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    country: 'India',
    description: 'City of Nawabs with accessible historical monuments and culinary experiences.',
    imageUrl: 'https://images.pexels.com/photos/2387872/pexels-photo-2387872.jpeg',
    accessibilityScore: 4.1,
    features: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.audioDescriptions,
      accessibilityFeatures.serviceAnimals
    ],
    reviewCount: 123
  }
];

export const accommodations: Accommodation[] = [
  // Existing accommodations
  {
    id: 'taj-delhi',
    name: 'Taj Palace Delhi',
    destinationId: 'delhi',
    type: 'hotel',
    description: 'Luxury hotel with comprehensive accessibility features.',
    imageUrl: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.accessibleBathroom
    ],
    price: {
      amount: 15000,
      currency: 'INR'
    },
    address: 'Diplomatic Enclave, Delhi',
    reviewCount: 89,
    rating: 4.7
  },
  {
    id: 'oberoi-mumbai',
    name: 'The Oberoi Mumbai',
    destinationId: 'mumbai',
    type: 'hotel',
    description: 'Seaside luxury hotel with accessible facilities.',
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.accessibleBathroom
    ],
    price: {
      amount: 18000,
      currency: 'INR'
    },
    address: 'Nariman Point, Mumbai',
    reviewCount: 76,
    rating: 4.8
  },
  {
    id: 'leela-bangalore',
    name: 'The Leela Palace Bangalore',
    destinationId: 'bangalore',
    type: 'hotel',
    description: 'Luxury hotel with extensive accessibility features.',
    imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.elevators,
      accessibilityFeatures.accessibleBathroom,
      accessibilityFeatures.hearingLoop
    ],
    price: {
      amount: 16000,
      currency: 'INR'
    },
    address: 'Old Airport Road, Bangalore',
    reviewCount: 92,
    rating: 4.9
  },
  {
    id: 'itc-chennai',
    name: 'ITC Grand Chola Chennai',
    destinationId: 'chennai',
    type: 'hotel',
    description: 'Luxury hotel with modern accessibility amenities.',
    imageUrl: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.tactilePaving,
      accessibilityFeatures.assistedListening
    ],
    price: {
      amount: 14000,
      currency: 'INR'
    },
    address: 'Mount Road, Chennai',
    reviewCount: 85,
    rating: 4.6
  },
  {
    id: 'hyatt-kolkata',
    name: 'Hyatt Regency Kolkata',
    destinationId: 'kolkata',
    type: 'hotel',
    description: 'Modern hotel with comprehensive accessibility features.',
    imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.quietSpaces
    ],
    price: {
      amount: 12000,
      currency: 'INR'
    },
    address: 'Salt Lake City, Kolkata',
    reviewCount: 78,
    rating: 4.5
  },
  // New accommodations
  {
    id: 'taj-goa',
    name: 'Taj Resort & Convention Centre Goa',
    destinationId: 'goa',
    type: 'resort',
    description: 'Beachfront resort with accessible rooms and facilities.',
    imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.accessibleBathroom
    ],
    price: {
      amount: 20000,
      currency: 'INR'
    },
    address: 'Dona Paula, Goa',
    reviewCount: 95,
    rating: 4.8
  },
  {
    id: 'leela-udaipur',
    name: 'The Leela Palace Udaipur',
    destinationId: 'udaipur',
    type: 'hotel',
    description: 'Lakeside palace hotel with accessible luxury.',
    imageUrl: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.elevators,
      accessibilityFeatures.audioDescriptions,
      accessibilityFeatures.accessibleBathroom
    ],
    price: {
      amount: 25000,
      currency: 'INR'
    },
    address: 'Lake Pichola, Udaipur',
    reviewCount: 88,
    rating: 4.9
  },
  {
    id: 'radisson-mysore',
    name: 'Radisson Blu Plaza Mysore',
    destinationId: 'mysore',
    type: 'hotel',
    description: 'Contemporary hotel with accessible amenities.',
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.quietSpaces
    ],
    price: {
      amount: 12000,
      currency: 'INR'
    },
    address: 'City Center, Mysore',
    reviewCount: 76,
    rating: 4.6
  },
  {
    id: 'ananda-rishikesh',
    name: 'Ananda in the Himalayas',
    destinationId: 'rishikesh',
    type: 'resort',
    description: 'Wellness resort with accessible spa facilities.',
    imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.quietSpaces,
      accessibilityFeatures.accessibleBathroom
    ],
    price: {
      amount: 30000,
      currency: 'INR'
    },
    address: 'The Palace Estate, Rishikesh',
    reviewCount: 82,
    rating: 4.8
  },
  {
    id: 'hyatt-amritsar',
    name: 'Hyatt Amritsar',
    destinationId: 'amritsar',
    type: 'hotel',
    description: 'Modern hotel near Golden Temple with accessibility features.',
    imageUrl: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.assistedListening,
      accessibilityFeatures.visualSignage
    ],
    price: {
      amount: 10000,
      currency: 'INR'
    },
    address: 'MBM Farms, Amritsar',
    reviewCount: 71,
    rating: 4.5
  }
];

export const transportations: Transportation[] = [
  // Existing transportation options
  {
    id: 'delhi-metro',
    type: 'train',
    name: 'Delhi Metro',
    destinationId: 'delhi',
    description: 'Modern metro system with complete accessibility.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.visualSignage
    ],
    imageUrl: 'https://images.pexels.com/photos/2031756/pexels-photo-2031756.jpeg'
  },
  {
    id: 'mumbai-local',
    type: 'train',
    name: 'Mumbai Local',
    destinationId: 'mumbai',
    description: 'Local train system with accessibility features.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage
    ],
    imageUrl: 'https://images.pexels.com/photos/2031756/pexels-photo-2031756.jpeg'
  },
  {
    id: 'bangalore-metro',
    type: 'train',
    name: 'Namma Metro',
    destinationId: 'bangalore',
    description: 'Modern metro system with full accessibility.',
    accessibilityFeatures: [
      accessibilityFeatures.elevators,
      accessibilityFeatures.tactilePaving,
      accessibilityFeatures.audioDescriptions
    ],
    imageUrl: 'https://images.pexels.com/photos/3224225/pexels-photo-3224225.jpeg'
  },
  {
    id: 'chennai-mrts',
    type: 'train',
    name: 'Chennai MRTS',
    destinationId: 'chennai',
    description: 'Elevated rail system with accessibility features.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.assistedListening,
      accessibilityFeatures.visualSignage
    ],
    imageUrl: 'https://images.pexels.com/photos/2615047/pexels-photo-2615047.jpeg'
  },
  {
    id: 'kolkata-metro',
    type: 'train',
    name: 'Kolkata Metro',
    destinationId: 'kolkata',
    description: "India's first metro system with modern accessibility.",
    accessibilityFeatures: [
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.hearingLoop
    ],
    imageUrl: 'https://images.pexels.com/photos/2031756/pexels-photo-2031756.jpeg'
  },
  // New transportation options
  {
    id: 'goa-ferry',
    type: 'ferry',
    name: 'Goa River Navigation',
    destinationId: 'goa',
    description: 'Accessible ferry service connecting major beaches.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.serviceAnimals
    ],
    imageUrl: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg'
  },
  {
    id: 'udaipur-boat',
    type: 'ferry',
    name: 'Lake Pichola Boat Service',
    destinationId: 'udaipur',
    description: 'Accessible boat tours of Lake Pichola.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.audioDescriptions,
      accessibilityFeatures.assistedListening
    ],
    imageUrl: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg'
  },
  {
    id: 'mysore-bus',
    type: 'bus',
    name: 'Mysore City Bus',
    destinationId: 'mysore',
    description: 'Accessible city bus service with low-floor buses.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage,
      accessibilityFeatures.audioDescriptions
    ],
    imageUrl: 'https://images.pexels.com/photos/2615047/pexels-photo-2615047.jpeg'
  },
  {
    id: 'rishikesh-taxi',
    type: 'taxi',
    name: 'Rishikesh Accessible Cabs',
    destinationId: 'rishikesh',
    description: 'Wheelchair-accessible taxi service.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.serviceAnimals,
      accessibilityFeatures.quietSpaces
    ],
    imageUrl: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg'
  },
  {
    id: 'amritsar-bus',
    type: 'bus',
    name: 'Amritsar City Transport',
    destinationId: 'amritsar',
    description: 'Accessible bus service connecting major landmarks.',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage,
      accessibilityFeatures.assistedListening
    ],
    imageUrl: 'https://images.pexels.com/photos/2615047/pexels-photo-2615047.jpeg'
  }
];

export const attractions: Attraction[] = [
  // Existing attractions
  {
    id: 'red-fort',
    name: 'Red Fort',
    destinationId: 'delhi',
    type: 'museum',
    description: 'Historic fort with accessible pathways.',
    imageUrl: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage
    ],
    address: 'Chandni Chowk, Delhi',
    price: {
      amount: 150,
      currency: 'INR'
    }
  },
  {
    id: 'gateway-india',
    name: 'Gateway of India',
    destinationId: 'mumbai',
    type: 'attraction',
    description: 'Historic monument with accessible viewing areas.',
    imageUrl: 'https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.visualSignage
    ],
    address: 'Apollo Bunder, Mumbai',
    price: {
      amount: 0,
      currency: 'INR'
    }
  },
  {
    id: 'lalbagh',
    name: 'Lalbagh Botanical Garden',
    destinationId: 'bangalore',
    type: 'park',
    description: 'Historic garden with accessible paths and facilities.',
    imageUrl: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.tactilePaving,
      accessibilityFeatures.quietSpaces
    ],
    address: 'Lalbagh Road, Bangalore',
    price: {
      amount: 50,
      currency: 'INR'
    }
  },
  {
    id: 'marina-beach',
    name: 'Marina Beach',
    destinationId: 'chennai',
    type: 'beach',
    description: 'Accessible beachfront with special pathways.',
    imageUrl: 'https://images.pexels.com/photos/2389418/pexels-photo-2389418.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.audioDescriptions,
      accessibilityFeatures.mobilityScooters
    ],
    address: 'Marina Beach Road, Chennai',
    price: {
      amount: 0,
      currency: 'INR'
    }
  },
  {
    id: 'victoria-memorial',
    name: 'Victoria Memorial',
    destinationId: 'kolkata',
    type: 'museum',
    description: 'Historic museum with modern accessibility features.',
    imageUrl: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.assistedListening
    ],
    address: 'Queens Way, Kolkata',
    price: {
      amount: 100,
      currency: 'INR'
    }
  },
  // New attractions
  {
    id: 'calangute-beach',
    name: 'Calangute Beach',
    destinationId: 'goa',
    type: 'beach',
    description: 'Accessible beach with beach wheelchairs and ramps.',
    imageUrl: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.mobilityScooters,
      accessibilityFeatures.serviceAnimals
    ],
    address: 'Calangute, North Goa',
    price: {
      amount: 0,
      currency: 'INR'
    }
  },
  {
    id: 'city-palace-udaipur',
    name: 'City Palace Museum',
    destinationId: 'udaipur',
    type: 'museum',
    description: 'Royal palace with accessible tours and facilities.',
    imageUrl: 'https://images.pexels.com/photos/3581353/pexels-photo-3581353.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.elevators,
      accessibilityFeatures.audioDescriptions
    ],
    address: 'City Palace Road, Udaipur',
    price: {
      amount: 250,
      currency: 'INR'
    }
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Palace',
    destinationId: 'mysore',
    type: 'museum',
    description: 'Magnificent palace with accessible guided tours.',
    imageUrl: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.brailleInfo,
      accessibilityFeatures.quietSpaces
    ],
    address: 'Sayyaji Rao Road, Mysore',
    price: {
      amount: 200,
      currency: 'INR'
    }
  },
  {
    id: 'triveni-ghat',
    name: 'Triveni Ghat',
    destinationId: 'rishikesh',
    type: 'attraction',
    description: 'Accessible riverside ghat with evening aarti viewing area.',
    imageUrl: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.quietSpaces,
      accessibilityFeatures.serviceAnimals
    ],
    address: 'Triveni Ghat Road, Rishikesh',
    price: {
      amount: 0,
      currency: 'INR'
    }
  },
  {
    id: 'golden-temple',
    name: 'Golden Temple',
    destinationId: 'amritsar',
    type: 'attraction',
    description: 'Sacred site with comprehensive accessibility features.',
    imageUrl: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg',
    accessibilityFeatures: [
      accessibilityFeatures.wheelchairRamps,
      accessibilityFeatures.assistedListening,
      accessibilityFeatures.visualSignage
    ],
    address: 'Golden Temple Road, Amritsar',
    price: {
      amount: 0,
      currency: 'INR'
    }
  }
];