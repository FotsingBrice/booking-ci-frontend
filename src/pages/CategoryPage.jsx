// src/pages/CategoryPage.jsx

import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { CATEGORY_KEYWORDS } from '../data/keywords.js';
import { MOCK_LISTINGS } from '../data/listings.js';
// ATTENTION : FiSort est remplacé par FiArrowDown pour contourner le bug du cache Vite
import { FiMapPin, FiStar, FiFilter, FiArrowDown, FiGrid } from 'react-icons/fi'; 

// --- FONCTIONS ET COMPOSANTS UTILITAIRES ---

const getCategoryInfo = (slug) => {
  return CATEGORY_KEYWORDS.find(cat => cat.slug === slug) || { name: 'Catégorie Inconnue', slug: slug };
};

const ListingCard = ({ item, categorySlug }) => (
  <Link 
    to={`/${categorySlug}/${item.id}`} 
    className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] border-l-4 border-blue-500"
  >
    <img src={item.image} alt={item.name} className="w-1/3 h-40 object-cover" />
    <div className="p-4 flex flex-col justify-between w-2/3">
      <div>
        <h3 className="text-xl font-semibold text-blue-700">{item.name}</h3>
        <p className="text-sm text-gray-500 flex items-center mt-1">
          <FiMapPin className="w-4 h-4 mr-1" /> {item.city}
        </p>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center text-yellow-500">
          <FiStar className="w-4 h-4 mr-1" />
          <span className="font-bold text-gray-800">{item.rating}</span>
        </div>
        <span className="text-lg font-bold text-green-600">
          {item.price.toLocaleString('fr-FR')} FCFA / jour
        </span>
      </div>
    </div>
  </Link>
);


// -----------------------------------------------------------
// COMPOSANT PRINCIPAL
// -----------------------------------------------------------

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const categoryInfo = getCategoryInfo(categorySlug);
  
  const [filterCity, setFilterCity] = useState('Toutes les villes');
  const [sortBy, setSortBy] = useState('rating_desc');

  // 1. Déterminer les villes uniques disponibles (Optimisé par useMemo)
  const availableCities = useMemo(() => {
    const categoryListings = MOCK_LISTINGS.filter(item => item.category === categorySlug);
    const initialList = categoryListings.map(item => item.city);
    return ['Toutes les villes', ...new Set(initialList)].sort();
  }, [categorySlug]);


  // 2. Logique de filtrage et de tri (Optimisée par useMemo)
  const sortedAndFilteredListings = useMemo(() => {
    let filtered = MOCK_LISTINGS.filter(item => item.category === categorySlug);

    if (filterCity && filterCity !== 'Toutes les villes') {
      filtered = filtered.filter(item => item.city === filterCity);
    }
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return a.price - b.price; // Prix croissant
        case 'price_desc':
          return b.price - a.price; // Prix décroissant
        case 'rating_desc':
        default:
          return b.rating - a.rating; // Note décroissante (par défaut)
      }
    });
  }, [categorySlug, filterCity, sortBy]);

  const listings = sortedAndFilteredListings;

  // -----------------------------------------------------------
  // RENDU
  // -----------------------------------------------------------

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2 border-blue-600">
        {categoryInfo.name} ({listings.length} Résultats)
      </h1>
      
      {/* BARRE DE FILTRES ET TRI */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* FILTRE PAR VILLE */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <FiFilter className="w-5 h-5 text-gray-600" />
          <label htmlFor="city-filter" className="font-medium text-gray-700 hidden sm:inline">Ville:</label>
          <select
            id="city-filter"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="p-2 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            {availableCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* OPTIONS DE TRI */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          {/* FIX: FiSort remplacé par FiArrowDown */}
          <FiArrowDown className="w-5 h-5 text-gray-600" /> 
          <label htmlFor="sort-by" className="font-medium text-gray-700 hidden sm:inline">Trier par:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="rating_desc">Meilleure Note (Défaut)</option>
            <option value="price_asc">Prix (Croissant)</option>
            <option value="price_desc">Prix (Décroissant)</option>
          </select>
        </div>
      </div>


      {/* LISTE DES ANNONCES FILTRÉES ET TRIÉES */}
      {listings.length > 0 ? (
        <div className="space-y-6">
          {listings.map(item => (
            <ListingCard key={item.id} item={item} categorySlug={categorySlug} />
          ))}
        </div>
      ) : (
        <div className="bg-yellow-50 p-6 rounded-lg text-center text-yellow-700">
          <p className="font-semibold">
            Aucun service trouvé pour "{categoryInfo.name}" dans ces critères de recherche.
          </p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
            Retour à l'accueil
          </Link>
        </div>
      )}
    </div>
  );
}