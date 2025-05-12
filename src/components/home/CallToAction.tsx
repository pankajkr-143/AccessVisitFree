import React, { useState } from 'react';
import AuthModal from '../auth/AuthModal';

const CallToAction: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community of Accessible Travelers</h2>
          <p className="text-xl mb-8 text-primary-100">
            Share your experiences, contribute reviews, and help build a more accessible world for all travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Sign Up Free
            </button>
            <a 
              href="/partner"
              className="bg-primary-700 text-white hover:bg-primary-800 border border-primary-500 px-6 py-3 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="signup"
      />
    </section>
  );
};

export default CallToAction;