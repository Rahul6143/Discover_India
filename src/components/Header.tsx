
import { MapPin, Search } from 'lucide-react';
import CitySelector from './CitySelector';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  selectedCity: string;
  onCityChange: (cityId: string) => void;
}

const Header = ({ selectedCity, onCityChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-xl shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                India Explorer
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">Discover Amazing Cities</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center max-w-md w-full mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            <CitySelector selectedCity={selectedCity} onCityChange={onCityChange} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
