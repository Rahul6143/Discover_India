
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-800 dark:via-red-800 dark:to-pink-800 text-white py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Explore Incredible
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            India
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto animate-fade-in">
          Discover heritage monuments, delicious cuisine, vibrant culture, and breathtaking landscapes across Indian cities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-orange-200 text-sm">Cities Available</span>
            <div className="text-2xl font-bold">8+ Cities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-orange-200 text-sm">Average Rating</span>
            <div className="text-2xl font-bold">4.4 ⭐</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-orange-200 text-sm">Categories</span>
            <div className="text-2xl font-bold">5 Types</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
