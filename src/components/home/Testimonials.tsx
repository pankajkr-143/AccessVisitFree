import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "AccessTravel has been a game-changer for me. I can now find detailed accessibility information that makes planning my trips so much easier and less stressful.",
    author: "Alex Rivera",
    location: "Wheelchair user from Chicago",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 2,
    quote: "As someone with visual impairment, finding places with proper accommodations has always been challenging. This platform has opened up new travel possibilities for me.",
    author: "Sarah Chen",
    location: "Low vision traveler from Toronto",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: 3,
    quote: "I travel with my son who has autism, and finding sensory-friendly attractions is crucial for us. The detailed reviews from other parents have been invaluable.",
    author: "Michael Johnson",
    location: "Family traveler from London",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from travelers who've used our platform to plan accessible trips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-4 text-secondary-500">
                <Quote size={32} />
              </div>
              <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;