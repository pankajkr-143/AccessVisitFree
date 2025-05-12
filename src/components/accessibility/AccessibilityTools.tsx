import React, { useState } from 'react';
import { Accessibility, SunMoon, Type, MousePointer2 } from 'lucide-react';

const AccessibilityTools: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
    document.documentElement.classList.toggle('large-text');
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
  };

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-label="Accessibility options"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-primary-600 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <Accessibility size={20} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="p-3 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-700">Accessibility Options</h3>
          </div>
          
          <div className="p-2">
            <button
              onClick={toggleHighContrast}
              className={`w-full text-left flex items-center px-3 py-2 rounded-md text-sm ${
                highContrast ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-pressed={highContrast}
            >
              <SunMoon size={16} className="mr-2" />
              High Contrast
            </button>
            
            <button
              onClick={toggleLargeText}
              className={`w-full text-left flex items-center px-3 py-2 rounded-md text-sm ${
                largeText ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-pressed={largeText}
            >
              <Type size={16} className="mr-2" />
              Large Text
            </button>
            
            <button
              onClick={toggleReducedMotion}
              className={`w-full text-left flex items-center px-3 py-2 rounded-md text-sm ${
                reducedMotion ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-pressed={reducedMotion}
            >
              <MousePointer2 size={16} className="mr-2" />
              Reduce Motion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityTools;