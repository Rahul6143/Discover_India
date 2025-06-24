
import { useState } from 'react';
import { MapPin, Clock, Star, IndianRupee, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Destination } from '../data/Data';
import ImageCarousel from './ImageCarousel';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      Food: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
      Heritage: 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white',
      Nature: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
      Entertainment: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      Shopping: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Food: '🍽️',
      Heritage: '🏛️',
      Nature: '🌿',
      Entertainment: '🎭',
      Shopping: '🛍️'
    };
    return icons[category as keyof typeof icons] || '📍';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700">
      {/* Image Carousel */}
      <div className="relative">
        <ImageCarousel images={destination.images} alt={destination.name} />
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getCategoryColor(destination.category)} shadow-lg`}>
            <span>{getCategoryIcon(destination.category)}</span>
            {destination.category}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">{destination.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
            {destination.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <IndianRupee className="w-4 h-4" />
              <span className="text-sm font-semibold">{destination.price}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">{destination.timings}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
          {destination.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <MapPin className="w-4 h-4 text-indigo-500" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{destination.location}</span>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
        >
          {isExpanded ? 'Show Less' : 'Discover More'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 animate-fade-in">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-5 mb-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {destination.longDescription}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-lg">✨</span>
                Experience Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;
