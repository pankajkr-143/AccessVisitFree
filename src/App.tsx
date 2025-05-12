import React, { useEffect } from 'react';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Accommodations from './pages/Accommodations';
import Transportation from './pages/Transportation';
import Attractions from './pages/Attractions';
import DestinationDetail from './pages/DestinationDetail';
import AccommodationDetail from './pages/AccommodationDetail';
import AttractionDetail from './pages/AttractionDetail';
import TransportationDetail from './pages/TransportationDetail';
import Contact from './pages/Contact';
import Partner from './pages/Partner';
import ExploreArea from './pages/ExploreArea';
import TransportationSchedule from './pages/TransportationSchedule';

function App() {
  const path = window.location.pathname;
  
  useEffect(() => {
    const titleElement = document.querySelector('title');
    if (titleElement) {
      switch (path) {
        case '/destinations':
          titleElement.innerHTML = 'Destinations | AccessTravel';
          break;
        case '/accommodations':
          titleElement.innerHTML = 'Accommodations | AccessTravel';
          break;
        case '/transportation':
          titleElement.innerHTML = 'Transportation | AccessTravel';
          break;
        case '/attractions':
          titleElement.innerHTML = 'Attractions | AccessTravel';
          break;
        case '/contact':
          titleElement.innerHTML = 'Contact Us | AccessTravel';
          break;
        case '/partner':
          titleElement.innerHTML = 'Partner with Us | AccessTravel';
          break;
        default:
          titleElement.innerHTML = 'AccessTravel - Accessible Tourism Platform';
          break;
      }
    }
  }, [path]);

  // Extract ID from URL for detail pages
  const getIdFromPath = (prefix: string) => {
    const regex = new RegExp(`^${prefix}/([^/]+)$`);
    const match = path.match(regex);
    return match ? match[1] : null;
  };

  // Handle explore area route
  if (path.startsWith('/explore/')) {
    const params = new URLSearchParams(window.location.search);
    return (
      <ExploreArea
        location={params.get('name') || ''}
        address={params.get('address') || ''}
      />
    );
  }

  // Handle schedule route
  if (path.startsWith('/schedule/')) {
    const params = new URLSearchParams(window.location.search);
    return (
      <TransportationSchedule
        transportName={params.get('name') || ''}
        type={params.get('type') || ''}
      />
    );
  }

  // Enhanced routing logic
  if (path.startsWith('/destinations/')) {
    const id = getIdFromPath('/destinations');
    return id ? <DestinationDetail id={id} /> : <Home />;
  } else if (path.startsWith('/accommodations/')) {
    const id = getIdFromPath('/accommodations');
    return id ? <AccommodationDetail id={id} /> : <Home />;
  } else if (path.startsWith('/attractions/')) {
    const id = getIdFromPath('/attractions');
    return id ? <AttractionDetail id={id} /> : <Home />;
  } else if (path.startsWith('/transportation/')) {
    const id = getIdFromPath('/transportation');
    return id ? <TransportationDetail id={id} /> : <Home />;
  }

  switch (path) {
    case '/destinations':
      return <Destinations />;
    case '/accommodations':
      return <Accommodations />;
    case '/transportation':
      return <Transportation />;
    case '/attractions':
      return <Attractions />;
    case '/contact':
      return <Contact />;
    case '/partner':
      return <Partner />;
    default:
      return <Home />;
  }
}

export default App;