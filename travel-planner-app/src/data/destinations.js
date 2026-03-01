export const destinations = [
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    emoji: '🗼',
    color: '#B4E7CE',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', // Eiffel Tower
    priceFrom: 120,
    rating: 4.8,
    description: 'The City of Light, famous for the Eiffel Tower, world-class art museums, and exquisite cuisine. Experience romantic streets, historic landmarks, and vibrant culture.',
    attractions: [
      { name: 'Eiffel Tower', type: 'Landmark', description: 'Iconic iron tower with city views' },
      { name: 'Louvre Museum', type: 'Museum', description: 'World\'s largest art museum' },
      { name: 'Notre-Dame Cathedral', type: 'Historic', description: 'Gothic cathedral masterpiece' },
      { name: 'Arc de Triomphe', type: 'Monument', description: 'Famous victory monument' },
    ],
    accommodations: [
      { name: 'Hotel Le Marais', price: 150, rating: 4.5 },
      { name: 'Montmartre Inn', price: 120, rating: 4.3 },
      { name: 'Champs Elysees Suite', price: 200, rating: 4.7 },
    ],
    weather: {
      city: 'Paris',
      country: 'FR'
    }
  },
  {
    id: 2,
    name: 'Ghana',
    country: 'Accra',
    emoji: '🏖️',
    color: '#FDE68A',
    imageUrl: 'https://images.unsplash.com/photo-1651860282137-a59f01d2db7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2hhbmElMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D', // Accra beach
    priceFrom: 200,
    rating: 4.6,
    description: 'Rich culture, stunning beaches, and warm hospitality. Discover historic castles, vibrant markets, and beautiful coastal scenery.',
    attractions: [
      { name: 'Kakum National Park', type: 'Nature', description: 'Rainforest canopy walkway' },
      { name: 'Cape Coast Castle', type: 'Historic', description: 'UNESCO World Heritage site' },
      { name: 'Labadi Beach', type: 'Beach', description: 'Popular sandy beach' },
      { name: 'Elmina Castle', type: 'Historic', description: 'Historic trading post' },
    ],
    accommodations: [
      { name: 'Accra Beach Hotel', price: 180, rating: 4.4 },
      { name: 'Golden Tulip', price: 200, rating: 4.6 },
      { name: 'Movenpick Ambassador', price: 220, rating: 4.8 },
    ],
    weather: {
      city: 'Accra',
      country: 'GH'
    }
  },
  {
    id: 3,
    name: 'London',
    country: 'United Kingdom',
    emoji: '🏰',
    color: '#93C5FD',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', // London
    priceFrom: 95,
    rating: 4.9,
    description: 'Historic landmarks, royal palaces, and vibrant culture. Experience Big Ben, world-class museums, and diverse neighborhoods.',
    attractions: [
      { name: 'Big Ben', type: 'Landmark', description: 'Iconic clock tower' },
      { name: 'Buckingham Palace', type: 'Royal', description: 'Queen\'s official residence' },
      { name: 'Tower Bridge', type: 'Landmark', description: 'Famous drawbridge' },
      { name: 'London Eye', type: 'Attraction', description: 'Giant observation wheel' },
    ],
    accommodations: [
      { name: 'The Savoy', price: 250, rating: 4.9 },
      { name: 'Premier Inn', price: 95, rating: 4.2 },
      { name: 'Hilton London', price: 180, rating: 4.6 },
    ],
    weather: {
      city: 'London',
      country: 'GB'
    }
  },
  {
    id: 4,
    name: 'Tokyo',
    country: 'Japan',
    emoji: '🗾',
    color: '#DDD6FE',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', // Tokyo
    priceFrom: 150,
    rating: 4.9,
    description: 'A vibrant blend of traditional and modern culture. Experience ancient temples, cutting-edge technology, and incredible cuisine.',
    attractions: [
      { name: 'Senso-ji Temple', type: 'Temple', description: 'Ancient Buddhist temple' },
      { name: 'Tokyo Tower', type: 'Landmark', description: 'Communications tower' },
      { name: 'Shibuya Crossing', type: 'Urban', description: 'World\'s busiest intersection' },
      { name: 'Mount Fuji View', type: 'Nature', description: 'Iconic mountain views' },
    ],
    accommodations: [
      { name: 'Park Hyatt Tokyo', price: 300, rating: 4.8 },
      { name: 'Capsule Hotel', price: 50, rating: 4.0 },
      { name: 'Tokyo Station Hotel', price: 200, rating: 4.7 },
    ],
    weather: {
      city: 'Tokyo',
      country: 'JP'
    }
  },
  {
    id: 5,
    name: 'Dubai',
    country: 'UAE',
    emoji: '🕌',
    color: '#FECACA',
    imageUrl: 'https://images.unsplash.com/photo-1732360487679-5dd25e9dbdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1YmFpJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww', // Dubai
    priceFrom: 200,
    rating: 4.8,
    description: 'Luxury, modern architecture, and desert adventures. Experience record-breaking buildings, shopping, and Arabian culture.',
    attractions: [
      { name: 'Burj Khalifa', type: 'Skyscraper', description: 'World\'s tallest building' },
      { name: 'Dubai Mall', type: 'Shopping', description: 'Massive shopping complex' },
      { name: 'Palm Jumeirah', type: 'Island', description: 'Artificial palm-shaped island' },
      { name: 'Desert Safari', type: 'Adventure', description: 'Dune bashing experience' },
    ],
    accommodations: [
      { name: 'Burj Al Arab', price: 500, rating: 5.0 },
      { name: 'Atlantis The Palm', price: 350, rating: 4.8 },
      { name: 'JW Marriott', price: 200, rating: 4.6 },
    ],
    weather: {
      city: 'Dubai',
      country: 'AE'
    }
  },
  {
    id: 6,
    name: 'Bali',
    country: 'Indonesia',
    emoji: '🏝️',
    color: '#FED7AA',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', // Bali
    priceFrom: 80,
    rating: 4.9,
    description: 'Tropical paradise with beaches, temples, and culture. Experience stunning rice terraces, spiritual temples, and beach paradise.',
    attractions: [
      { name: 'Uluwatu Temple', type: 'Temple', description: 'Cliffside temple with sunset views' },
      { name: 'Tegallalang Rice Terraces', type: 'Nature', description: 'Stunning stepped rice fields' },
      { name: 'Seminyak Beach', type: 'Beach', description: 'Upscale beach with resorts' },
      { name: 'Sacred Monkey Forest', type: 'Nature', description: 'Temple complex with monkeys' },
    ],
    accommodations: [
      { name: 'Four Seasons Bali', price: 300, rating: 4.9 },
      { name: 'Ubud Hanging Gardens', price: 250, rating: 4.8 },
      { name: 'Beach Bungalow', price: 80, rating: 4.3 },
    ],
    weather: {
      city: 'Bali',
      country: 'ID'
    }
  }
]