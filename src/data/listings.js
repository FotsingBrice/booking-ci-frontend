// src/data/listings.js
export const MOCK_LISTINGS = [
  // Location de Voitures (slug: 'cars') - Priorité
  { id: 'c1', name: 'SUV Land Cruiser V8', category: 'cars', city: 'Abidjan', price: 40000, rating: 4.6, image: 'https://source.unsplash.com/400x300/?suv' },
  { id: 'c2', name: 'Berline Hyundai Accent', category: 'cars', city: 'Yamoussoukro', price: 15000, rating: 4.2, image: 'https://source.unsplash.com/400x300/?sedan' },
  
  // Bus & Autocars (slug: 'bus') - Priorité
  { id: 'b1', name: 'Bus Privé 50 Places', category: 'bus', city: 'Abidjan', price: 150000, rating: 4.8, image: 'https://source.unsplash.com/400x300/?bus' },
  
  // Engins de Chantier (slug: 'construction') - Priorité
  { id: 'e1', name: 'Grue Mobile 50T', category: 'construction', city: 'San Pédro', price: 300000, rating: 4.5, image: 'https://source.unsplash.com/400x300/?crane' },
  
  // Santé & Bien-être (slug: 'health')
  { id: 'h1', name: 'Clinique Riviera', category: 'health', city: 'Cocody', price: 50000, rating: 4.9, image: 'https://source.unsplash.com/400x300/?clinic' },
  
  // Hôtels (slug: 'hotels')
  { id: 'l1', name: 'Hôtel Ivotel Plateaux', category: 'hotels', city: 'Abidjan', price: 75000, rating: 4.5, image: 'https://source.unsplash.com/400x300/?hotel,luxury' },
];