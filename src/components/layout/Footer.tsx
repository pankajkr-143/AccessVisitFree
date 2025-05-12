import React from 'react';
import { MapPin, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin size={24} className="text-primary-400" />
              <span className="text-xl font-semibold">AccessTravel</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Empowering travelers with disabilities to explore the world with confidence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/destinations" className="text-gray-300 hover:text-primary-400 transition-colors">Destinations</a></li>
              <li><a href="/accommodations" className="text-gray-300 hover:text-primary-400 transition-colors">Accommodations</a></li>
              <li><a href="/transportation" className="text-gray-300 hover:text-primary-400 transition-colors">Transportation</a></li>
              <li><a href="/attractions" className="text-gray-300 hover:text-primary-400 transition-colors">Attractions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="/reviews" className="text-gray-300 hover:text-primary-400 transition-colors">Reviews</a></li>
              <li><a href="/stories" className="text-gray-300 hover:text-primary-400 transition-colors">Travel Stories</a></li>
              <li><a href="/forum" className="text-gray-300 hover:text-primary-400 transition-colors">Forum</a></li>
              <li><a href="/partners" className="text-gray-300 hover:text-primary-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-300 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="/accessibility" className="text-gray-300 hover:text-primary-400 transition-colors">Accessibility Statement</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} AccessTravel. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a 
              href="/partner"
              className="bg-primary-700 hover:bg-primary-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
            >
              Partner with us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;