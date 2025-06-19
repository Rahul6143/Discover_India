
export interface Destination {
  id: number;
  name: string;
  category: 'Food' | 'Heritage' | 'Nature' | 'Shopping' | 'Entertainment';
  rating: number;
  description: string;
  longDescription: string;
  images: string[];
  location: string;
  city: string;
  price: string;
  timings: string;
}

export const destinations: Destination[] = [
  // Mumbai
  {
    id: 1,
    name: "Gateway of India",
    category: "Heritage",
    rating: 4.6,
    description: "Iconic monument overlooking the Arabian Sea",
    longDescription: "The Gateway of India is an arch-monument built during the 20th century in Mumbai. It was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: "Apollo Bunder, Colaba",
    city: "mumbai",
    price: "Free",
    timings: "24 hours"
  },
  {
    id: 2,
    name: "Marine Drive",
    category: "Nature",
    rating: 4.5,
    description: "Famous promenade along the coast of Mumbai",
    longDescription: "Marine Drive is a 3.6-kilometre-long boulevard in South Mumbai. The road was constructed by late Pallonji Mistry. It is a 'C'-shaped six-lane concrete road along the coast, which is a natural bay.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    location: "South Mumbai",
    city: "mumbai",
    price: "Free",
    timings: "24 hours"
  },
  // Delhi
  {
    id: 3,
    name: "Red Fort",
    category: "Heritage",
    rating: 4.4,
    description: "Historic fortified palace of the Mughal emperors",
    longDescription: "The Red Fort is a historic walled city in Delhi, India, which served as the main residence of the Mughal Emperors for nearly 200 years, until 1856.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: "Old Delhi",
    city: "delhi",
    price: "₹35",
    timings: "9:30 AM - 4:30 PM"
  },
  {
    id: 4,
    name: "India Gate",
    category: "Heritage",
    rating: 4.3,
    description: "War memorial dedicated to Indian soldiers",
    longDescription: "The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Kingsway.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    location: "Rajpath, New Delhi",
    city: "delhi",
    price: "Free",
    timings: "24 hours"
  },
  // Bangalore
  {
    id: 5,
    name: "Lalbagh Botanical Garden",
    category: "Nature",
    rating: 4.4,
    description: "Historic botanical garden with diverse flora",
    longDescription: "Lalbagh or Lalbagh Botanical Gardens is a well known botanical garden in Bengaluru, India. The garden was commissioned by Hyder Ali in 1760 and completed during the reign of Tipu Sultan.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: "Mavalli, Bangalore",
    city: "bangalore",
    price: "₹10",
    timings: "6:00 AM - 7:00 PM"
  },
  {
    id: 6,
    name: "Cubbon Park",
    category: "Nature",
    rating: 4.2,
    description: "Large park in the heart of Bangalore",
    longDescription: "Cubbon Park is a landmark 'lung' area of the Bengaluru city, located within the heart of city in the Central Administrative Area.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    location: "Central Bangalore",
    city: "bangalore",
    price: "Free",
    timings: "6:00 AM - 6:00 PM"
  },
  // Jaipur
  {
    id: 7,
    name: "Hawa Mahal",
    category: "Heritage",
    rating: 4.5,
    description: "Palace of Winds with intricate architecture",
    longDescription: "Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: "Old City, Jaipur",
    city: "jaipur",
    price: "₹50",
    timings: "9:00 AM - 4:30 PM"
  },
  {
    id: 8,
    name: "Amber Fort",
    category: "Heritage",
    rating: 4.6,
    description: "Majestic fort with stunning architecture",
    longDescription: "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres located 11 kilometres from Jaipur, the capital of Rajasthan.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    location: "Amer, Jaipur",
    city: "jaipur",
    price: "₹100",
    timings: "8:00 AM - 6:00 PM"
  },
  // Chennai
  {
    id: 9,
    name: "Marina Beach",
    category: "Nature",
    rating: 4.1,
    description: "One of the longest urban beaches in the world",
    longDescription: "Marina Beach is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort St. George in the north to Foreshore Estate in the south.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    location: "Marina, Chennai",
    city: "chennai",
    price: "Free",
    timings: "24 hours"
  },
  {
    id: 10,
    name: "Kapaleeshwarar Temple",
    category: "Heritage",
    rating: 4.3,
    description: "Ancient temple dedicated to Lord Shiva",
    longDescription: "Kapaleeshwarar Temple is a Hindu temple dedicated to Shiva located in Mylapore, Chennai in the Indian state of Tamil Nadu.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: "Mylapore, Chennai",
    city: "chennai",
    price: "Free",
    timings: "5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM"
  }
];
