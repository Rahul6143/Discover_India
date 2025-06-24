import { useState } from 'react';
import { Destination } from '../data/Data';
import DestinationCard from './DestinationCard';

interface DestinationGridProps {
  destinations: Destination[];
  loading?: boolean;
}

const DestinationGrid = ({ destinations, loading = false }: DestinationGridProps) => {
  const [showAll, setShowAll] = useState(false);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (destinations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🏛️</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
      {destinations.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            {showAll ? 'Show Less' : `Show More`}
          </button>
        </div>
      )}
    </>
  );
};

export default DestinationGrid;
