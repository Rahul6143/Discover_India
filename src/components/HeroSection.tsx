
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm font-medium text-white/90">Explore India</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Discover
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Incredible India
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Journey through heritage monuments, savor authentic cuisine, experience vibrant culture, and explore breathtaking landscapes across India's magnificent cities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-3">🏙️</div>
            <div className="text-2xl font-bold mb-1">8+ Cities</div>
            <div className="text-indigo-200 text-sm">Major Indian destinations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-3">⭐</div>
            <div className="text-2xl font-bold mb-1">4.4 Rating</div>
            <div className="text-indigo-200 text-sm">Average destination rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-2xl font-bold mb-1">5 Categories</div>
            <div className="text-indigo-200 text-sm">Different experience types</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
