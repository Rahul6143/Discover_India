
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface City {
  id: string;
  name: string;
  logo: string;
}

const cities: City[] = [
  { id: 'mumbai', name: 'Mumbai', logo: '🏙️' },
  { id: 'delhi', name: 'Delhi', logo: '🏛️' },
  { id: 'bangalore', name: 'Bangalore', logo: '🌆' },
  { id: 'kolkata', name: 'Kolkata', logo: '🏗️' },
  { id: 'chennai', name: 'Chennai', logo: '🏖️' },
  { id: 'hyderabad', name: 'Hyderabad', logo: '💎' },
  { id: 'pune', name: 'Pune', logo: '🎓' },
  { id: 'jaipur', name: 'Jaipur', logo: '👑' }
];

interface CitySelectorProps {
  selectedCity: string;
  onCityChange: (cityId: string) => void;
}

const CitySelector = ({ selectedCity, onCityChange }: CitySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentCity = cities.find(city => city.id === selectedCity) || cities[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-2xl">{currentCity.logo}</span>
        <span className="font-medium text-gray-900 dark:text-white">{currentCity.name}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-48">
          <div className="py-2">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => {
                  onCityChange(city.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">{city.logo}</span>
                <span className="font-medium text-gray-900 dark:text-white">{city.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;
