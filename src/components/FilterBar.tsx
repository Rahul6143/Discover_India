
import { Filter, Star } from 'lucide-react';
import { categories } from '../data/mockData';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
}

const FilterBar = ({ selectedCategory, onCategoryChange, selectedRating, onRatingChange }: FilterBarProps) => {
  const ratings = [0, 4.0, 4.5, 4.8];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Categories */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Rating Filter */}
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 mr-2">Min Rating:</span>
            {ratings.map((rating) => (
              <button
                key={rating}
                onClick={() => onRatingChange(rating)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedRating === rating
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {rating === 0 ? 'All' : `${rating}+`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
