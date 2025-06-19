
import { useState, useRef, useEffect } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentCity = cities.find(city => city.id === selectedCity) || cities[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-indigo-200 dark:border-gray-600 rounded-xl px-4 py-2.5 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <span className="text-2xl">{currentCity.logo}</span>
        <div className="text-left">
          <div className="font-semibold text-gray-900 dark:text-white text-sm">{currentCity.name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">City</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 min-w-56 overflow-hidden">
          <div className="p-2">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">
              Select City
            </div>
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => {
                  onCityChange(city.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  city.id === selectedCity
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-2xl">{city.logo}</span>
                <div className="text-left">
                  <div className={`font-medium text-sm ${
                    city.id === selectedCity ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {city.name}
                  </div>
                  <div className={`text-xs ${
                    city.id === selectedCity ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    Explore destinations
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelector;
