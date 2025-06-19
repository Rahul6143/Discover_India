
export interface Destination {
  id: number;
  name: string;
  category: 'Food' | 'Heritage' | 'Nature' | 'Entertainment' | 'Shopping';
  rating: number;
  price: string;
  description: string;
  fullDescription: string;
  images: string[];
  location: string;
  openHours: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Majestic Palace Heritage",
    category: "Heritage",
    rating: 4.8,
    price: "$15",
    description: "Historic palace with stunning architecture and royal gardens",
    fullDescription: "Step into the grandeur of centuries past at this magnificent palace, featuring ornate chambers, pristine gardens, and artifacts that tell the story of royal heritage. The palace offers guided tours that reveal fascinating stories of the monarchs who once called this place home.",
    images: ["https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop&q=60"],
    location: "Royal District, City Center",
    openHours: "9:00 AM - 6:00 PM",
    highlights: ["Royal Throne Room", "Palace Gardens", "Crown Jewels Exhibition", "Historical Artifacts"]
  },
  {
    id: 2,
    name: "Mountain View Restaurant",
    category: "Food",
    rating: 4.6,
    price: "$$",
    description: "Fine dining with panoramic mountain views and local cuisine",
    fullDescription: "Experience culinary excellence at this award-winning restaurant that combines traditional flavors with modern presentation. Located on the 20th floor, it offers breathtaking views while you enjoy dishes crafted from locally sourced ingredients.",
    images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format&fit=crop&q=60"],
    location: "Skyline Tower, Downtown",
    openHours: "11:00 AM - 11:00 PM",
    highlights: ["Panoramic Views", "Local Specialties", "Wine Cellar", "Chef's Tasting Menu"]
  },
  {
    id: 3,
    name: "Wilderness National Park",
    category: "Nature",
    rating: 4.9,
    price: "$10",
    description: "Pristine wilderness with hiking trails and wildlife viewing",
    fullDescription: "Escape into nature at this sprawling national park featuring diverse ecosystems, crystal-clear lakes, and abundant wildlife. Whether you're an avid hiker or casual nature lover, the park offers trails for every skill level and unforgettable encounters with local fauna.",
    images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop&q=60"],
    location: "Northern Outskirts, 45 min drive",
    openHours: "6:00 AM - 8:00 PM",
    highlights: ["Wildlife Spotting", "Hiking Trails", "Lake Activities", "Photography Tours"]
  },
  {
    id: 4,
    name: "Rocky Summit Viewpoint",
    category: "Nature",
    rating: 4.7,
    price: "Free",
    description: "Breathtaking panoramic views from the city's highest peak",
    fullDescription: "Challenge yourself with a rewarding hike to the city's highest accessible point. The journey takes you through diverse terrain, culminating in spectacular 360-degree views that photographers and adventurers treasure. Best visited during sunrise or sunset for magical lighting.",
    images: ["https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=60"],
    location: "Eagle Ridge Trail, East Mountains",
    openHours: "24 hours (daylight recommended)",
    highlights: ["Sunrise Views", "Photography Spots", "Hiking Challenge", "City Panorama"]
  },
  {
    id: 5,
    name: "Tech Innovation Hub",
    category: "Entertainment",
    rating: 4.4,
    price: "$20",
    description: "Interactive technology museum with hands-on exhibits",
    fullDescription: "Discover the future at this cutting-edge technology center featuring interactive exhibits, virtual reality experiences, and workshops that showcase the latest innovations. Perfect for tech enthusiasts and families looking for educational entertainment.",
    images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60"],
    location: "Innovation District, Tech Quarter",
    openHours: "10:00 AM - 7:00 PM",
    highlights: ["VR Experiences", "Interactive Exhibits", "Tech Workshops", "Future Gallery"]
  },
  {
    id: 6,
    name: "Artisan Food Market",
    category: "Food",
    rating: 4.5,
    price: "$",
    description: "Local food market with artisan vendors and street food",
    fullDescription: "Immerse yourself in local flavors at this vibrant market where artisan vendors offer everything from traditional street food to gourmet specialties. The market buzzes with energy as locals and visitors sample diverse cuisines and discover unique ingredients.",
    images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format&fit=crop&q=60"],
    location: "Old Town Square, Historic Quarter",
    openHours: "8:00 AM - 4:00 PM",
    highlights: ["Local Vendors", "Street Food", "Fresh Produce", "Cultural Experience"]
  },
  {
    id: 7,
    name: "Heritage Cathedral",
    category: "Heritage",
    rating: 4.8,
    price: "Free",
    description: "Ancient cathedral with stunning stained glass and architecture",
    fullDescription: "Marvel at centuries of architectural mastery in this awe-inspiring cathedral. The intricate stained glass windows, soaring spires, and peaceful atmosphere make it a must-visit destination for history buffs and those seeking spiritual reflection.",
    images: ["https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop&q=60"],
    location: "Cathedral Square, Old City",
    openHours: "7:00 AM - 7:00 PM",
    highlights: ["Stained Glass", "Historical Tours", "Bell Tower", "Peaceful Gardens"]
  },
  {
    id: 8,
    name: "Adventure Sports Center",
    category: "Entertainment",
    rating: 4.6,
    price: "$$$",
    description: "Extreme sports and adventure activities for thrill seekers",
    fullDescription: "Get your adrenaline pumping at this premier adventure sports facility offering everything from rock climbing to zip-lining. Professional instructors ensure safety while you push your limits and create unforgettable memories.",
    images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop&q=60"],
    location: "Adventure Park, Sports Complex",
    openHours: "9:00 AM - 9:00 PM",
    highlights: ["Rock Climbing", "Zip Lines", "Obstacle Course", "Group Activities"]
  },
  {
    id: 9,
    name: "Luxury Shopping District",
    category: "Shopping",
    rating: 4.3,
    price: "$$$$",
    description: "Premium shopping destination with luxury brands and boutiques",
    fullDescription: "Indulge in world-class shopping at this elegant district featuring flagship stores of international luxury brands, exclusive boutiques, and designer collections. The beautifully designed spaces offer a premium shopping experience with personalized service.",
    images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format&fit=crop&q=60"],
    location: "Golden Mile, Fashion District",
    openHours: "10:00 AM - 10:00 PM",
    highlights: ["Luxury Brands", "Designer Boutiques", "Personal Shopping", "Premium Experience"]
  },
  {
    id: 10,
    name: "Riverside Café",
    category: "Food",
    rating: 4.4,
    price: "$$",
    description: "Charming riverside café with outdoor seating and local brews",
    fullDescription: "Relax by the flowing river at this charming café known for its artisanal coffee, fresh pastries, and peaceful atmosphere. The outdoor terrace offers perfect views of the water while you enjoy locally roasted coffee and homemade treats.",
    images: ["https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&auto=format&fit=crop&q=60"],
    location: "Riverside Walk, Waterfront",
    openHours: "7:00 AM - 9:00 PM",
    highlights: ["Riverside Views", "Artisan Coffee", "Fresh Pastries", "Outdoor Seating"]
  }
];

export const categories = [
  { name: 'All', value: 'all' },
  { name: 'Food', value: 'Food' },
  { name: 'Heritage', value: 'Heritage' },
  { name: 'Nature', value: 'Nature' },
  { name: 'Entertainment', value: 'Entertainment' },
  { name: 'Shopping', value: 'Shopping' }
];
