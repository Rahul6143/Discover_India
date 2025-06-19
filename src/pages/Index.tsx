
import { useState, useMemo } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterBar from '../components/FilterBar';
import DestinationGrid from '../components/DestinationGrid';
import ScrollToTop from '../components/ScrollToTop';
import { destinations } from '../data/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRating, setSelectedRating] = useState(0);

  // Filter destinations based on selected criteria
  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const categoryMatch = selectedCategory === 'all' || destination.category === selectedCategory;
      const ratingMatch = destination.rating >= selectedRating;
      return categoryMatch && ratingMatch;
    });
  }, [selectedCategory, selectedRating]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {selectedCategory === 'all' ? 'All Destinations' : `${selectedCategory} Destinations`}
          </h2>
          <p className="text-gray-600">
            {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
            {selectedRating > 0 && ` with ${selectedRating}+ star rating`}
          </p>
        </div>
        
        <DestinationGrid destinations={filteredDestinations} />
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
