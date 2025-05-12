export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  accessibilityScore: number;
  features: AccessibilityFeature[];
  reviewCount: number;
}

export interface Accommodation {
  id: string;
  name: string;
  destinationId: string;
  type: 'hotel' | 'hostel' | 'apartment' | 'resort';
  description: string;
  imageUrl: string;
  accessibilityFeatures: AccessibilityFeature[];
  price: {
    amount: number;
    currency: string;
  };
  address: string;
  reviewCount: number;
  rating: number;
}

export interface Transportation {
  id: string;
  type: 'airport' | 'train' | 'bus' | 'taxi' | 'ferry';
  name: string;
  destinationId: string;
  description: string;
  accessibilityFeatures: AccessibilityFeature[];
  imageUrl: string;
}

export interface Attraction {
  id: string;
  name: string;
  destinationId: string;
  type: 'museum' | 'park' | 'restaurant' | 'tour' | 'event' | 'beach' | 'other';
  description: string;
  imageUrl: string;
  accessibilityFeatures: AccessibilityFeature[];
  address: string;
  price?: {
    amount: number;
    currency: string;
  };
}

export interface AccessibilityFeature {
  type: 'mobility' | 'vision' | 'hearing' | 'cognitive' | 'sensory';
  name: string;
  description: string;
  verified: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    accessibilityNeeds: ('mobility' | 'vision' | 'hearing' | 'cognitive' | 'sensory')[];
    language: string;
    highContrast: boolean;
    largeText: boolean;
    reducedMotion: boolean;
  };
  savedDestinations: string[];
}

export interface Review {
  id: string;
  userId: string;
  itemId: string;
  itemType: 'destination' | 'accommodation' | 'transportation' | 'attraction';
  rating: number;
  title: string;
  content: string;
  accessibilityRatings: {
    mobility?: number;
    vision?: number;
    hearing?: number;
    cognitive?: number;
    sensory?: number;
  };
  date: string;
  helpfulCount: number;
}