
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
  const [selectedCity, setSelectedCity] = useState('mumbai');

  // Filter destinations based on selected criteria
  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const categoryMatch = selectedCategory === 'all' || destination.category === selectedCategory;
      const ratingMatch = destination.rating >= selectedRating;
      const cityMatch = destination.city === selectedCity;
      return categoryMatch && ratingMatch && cityMatch;
    });
  }, [selectedCategory, selectedRating, selectedCity]);

  const getCityName = (cityId: string) => {
    const cityNames: { [key: string]: string } = {
      mumbai: 'Mumbai',
      delhi: 'Delhi',
      bangalore: 'Bangalore',
      kolkata: 'Kolkata',
      chennai: 'Chennai',
      hyderabad: 'Hyderabad',
      pune: 'Pune',
      jaipur: 'Jaipur'
    };
    return cityNames[cityId] || 'Mumbai';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header selectedCity={selectedCity} onCityChange={setSelectedCity} />
      <HeroSection />
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {selectedCategory === 'all' ? `All Destinations in ${getCityName(selectedCity)}` : `${selectedCategory} in ${getCityName(selectedCity)}`}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
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
