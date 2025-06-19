
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Explore Amazing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Destinations
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in">
          Discover hidden gems, world-class dining, rich heritage sites, and breathtaking natural wonders in your city
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-blue-200 text-sm">Featured Today</span>
            <div className="text-2xl font-bold">10+ Destinations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-blue-200 text-sm">Average Rating</span>
            <div className="text-2xl font-bold">4.6 ⭐</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-blue-200 text-sm">Categories</span>
            <div className="text-2xl font-bold">5 Types</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
