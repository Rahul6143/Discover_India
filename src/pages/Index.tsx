import { useState, useMemo, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FilterBar from '../components/FilterBar';
import DestinationGrid from '../components/DestinationGrid';
import ScrollToTop from '../components/ScrollToTop';
import { destinations } from '../data/Data';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCity, setSelectedCity] = useState('hyderabad');

  const gridRef = useRef<HTMLDivElement>(null);

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
      chennai: 'Chennai',
      hyderabad: 'Hyderabad',
      pune: 'Pune',
      jaipur: 'Jaipur'
    };
    return cityNames[cityId] || 'Hyderabad';
  };

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId);
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Delay to ensure grid updates
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      <Header selectedCity={selectedCity} onCityChange={handleCityChange} />
      <HeroSection />
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            {selectedCategory === 'all' ? `Explore ${getCityName(selectedCity)}` : `${selectedCategory} in ${getCityName(selectedCity)}`}
          </h2>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-200 dark:border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
              {selectedRating > 0 && ` with ${selectedRating}+ star rating`}
            </p>
          </div>
        </div>
        
        <div ref={gridRef}>
          <DestinationGrid destinations={filteredDestinations} />
        </div>
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
