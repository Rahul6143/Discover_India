
import { Star, MapPin, Clock, Heart } from 'lucide-react';
import { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const DestinationCard = ({ destination }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const getCategoryIcon = (category) => {
    const icons = {
      Food: '🍽️',
      Heritage: '🏛️',
      Nature: '🌿',
      Shopping: '🛍️',
      Entertainment: '🎭'
    };
    return icons[category] || '📍';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700">
      <div className="relative">
        <ImageCarousel images={destination.images} alt={destination.name} />
        
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-20"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-400'}`} />
        </button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 z-20">
          <span className="text-sm">{getCategoryIcon(destination.category)}</span>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{destination.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
            {destination.name}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">{destination.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{destination.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{destination.timeToVisit}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ₹{destination.price}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">per person</span>
          </div>
          
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
