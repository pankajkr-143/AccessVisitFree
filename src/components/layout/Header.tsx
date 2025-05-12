import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Bed, Bus, Ticket, User, Settings, Search, Mail, Handshake, LogOut } from 'lucide-react';
import AccessibilityTools from '../accessibility/AccessibilityTools';
import AuthModal from '../auth/AuthModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsProfileDropdownOpen(false);
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsProfileDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2" aria-label="Accessible Tourism Platform">
              <MapPin size={24} className="text-primary-600" />
              <span className="text-xl font-semibold text-primary-600">AccessTravel</span>
            </a>
          </div>

          <a 
            href="#main-content" 
            className="absolute left-0 -top-10 focus:top-0 bg-primary-600 text-white px-4 py-2 transition-all focus:outline-none"
          >
            Skip to main content
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/destinations" className="text-gray-700 hover:text-primary-600 flex items-center gap-1.5">
              <MapPin size={18} />
              <span>Destinations</span>
            </a>
            <a href="/accommodations" className="text-gray-700 hover:text-primary-600 flex items-center gap-1.5">
              <Bed size={18} />
              <span>Accommodations</span>
            </a>
            <a href="/transportation" className="text-gray-700 hover:text-primary-600 flex items-center gap-1.5">
              <Bus size={18} />
              <span>Transportation</span>
            </a>
            <a href="/attractions" className="text-gray-700 hover:text-primary-600 flex items-center gap-1.5">
              <Ticket size={18} />
              <span>Attractions</span>
            </a>
            <a href="/contact" className="text-gray-700 hover:text-primary-600 flex items-center gap-1.5">
              <Mail size={18} />
              <span>Contact</span>
            </a>
            {/* <a href="/partner" className="text-gray-700 hover:text-primary-600 flex items-center gap-1.5">
              <Handshake size={18} />
              <span>Partner with Us</span>
            </a> */}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              aria-label="Search"
              className="text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-gray-100"
            >
              <Search size={20} />
            </button>
            
            <AccessibilityTools />
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="hidden md:flex text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-gray-100"
              >
                <User size={20} />
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {currentUser ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {currentUser.name}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => openAuthModal('login')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => openAuthModal('signup')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <a 
                href="/destinations" 
                className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin size={18} />
                <span>Destinations</span>
              </a>
              <a 
                href="/accommodations" 
                className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Bed size={18} />
                <span>Accommodations</span>
              </a>
              <a 
                href="/transportation" 
                className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Bus size={18} />
                <span>Transportation</span>
              </a>
              <a 
                href="/attractions" 
                className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Ticket size={18} />
                <span>Attractions</span>
              </a>
              <a 
                href="/contact" 
                className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>
              {/* <a 
                href="/partner" 
                className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Handshake size={18} />
                <span>Partner with Us</span>
              </a> */}
              {currentUser ? (
                <>
                  <div className="text-gray-700 flex items-center gap-2 p-2">
                    <User size={18} />
                    <span>{currentUser.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      openAuthModal('login');
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                  >
                    <User size={18} />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => {
                      openAuthModal('signup');
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-primary-600 flex items-center gap-2 p-2"
                  >
                    <User size={18} />
                    <span>Sign Up</span>
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          const user = localStorage.getItem('currentUser');
          if (user) {
            setCurrentUser(JSON.parse(user));
          }
        }}
        mode={authMode}
      />
    </header>
  );
};

export default Header;