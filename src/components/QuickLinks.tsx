import React from 'react';
import { Hotel, Bus, Ticket } from 'lucide-react';

interface QuickLinksProps {
  accommodationsCount?: number;
  transportationCount?: number;
  attractionsCount?: number;
}

const QuickLinks: React.FC<QuickLinksProps> = ({
  accommodationsCount = 0,
  transportationCount = 0,
  attractionsCount = 0
}) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <div className="space-y-4">
        <a href="#accommodations" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
          <Hotel size={20} />
          <span>{accommodationsCount} Accommodations</span>
        </a>
        <a href="#transportation" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
          <Bus size={20} />
          <span>{transportationCount} Transportation Options</span>
        </a>
        <a href="#attractions" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
          <Ticket size={20} />
          <span>{attractionsCount} Attractions</span>
        </a>
      </div>
    </section>
  );
};

export default QuickLinks;