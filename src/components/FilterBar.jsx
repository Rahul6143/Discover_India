
import { Filter, Star } from 'lucide-react';
import { categories } from '../data/mockData';

const FilterBar = ({ selectedCategory, onCategoryChange, selectedRating, onRatingChange }) => {
  const ratings = [0, 4.0, 4.5, 4.8];

  const getCategoryIcon = (categoryValue) => {
    const icons = {
      all: '🌟',
      Food: '🍽️',
      Heritage: '🏛️',
      Nature: '🌿',
      Shopping: '🛍️',
      Entertainment: '🎭'
    };
    return icons[categoryValue] || '📍';
  };

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Categories */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => onCategoryChange(category.value)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className="text-base">{getCategoryIcon(category.value)}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="lg:w-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rating</h3>
            </div>
            <div className="flex items-center gap-2">
              {ratings.map((rating) => (
                <button
                  key={rating}
                  onClick={() => onRatingChange(rating)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedRating === rating
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/30'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {rating === 0 ? 'All' : `${rating}+ ⭐`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
