
import { useState } from 'react';
import { MapPin, Clock, Star, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { Destination } from '../data/mockData';
import ImageCarousel from './ImageCarousel';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      Food: 'bg-orange-100 text-orange-800',
      Heritage: 'bg-purple-100 text-purple-800',
      Nature: 'bg-green-100 text-green-800',
      Entertainment: 'bg-blue-100 text-blue-800',
      Shopping: 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Carousel */}
      <ImageCarousel images={destination.images} alt={destination.name} />

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
              {destination.name}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(destination.category)}`}>
              {destination.category}
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{destination.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">{destination.price}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {destination.description}
        </p>

        {/* Location and Hours */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{destination.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{destination.timings}</span>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Show More Details'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-fade-in">
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {destination.longDescription}
            </p>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Highlights:</h4>
              <div className="grid grid-cols-2 gap-2">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{highlight}</span>
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
