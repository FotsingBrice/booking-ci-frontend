// src/pages/Results.jsx

import { useSearchParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { MOCK_LISTINGS } from '../data/listings.js';
import { CATEGORY_KEYWORDS } from '../data/keywords.js';
import { FiMapPin, FiStar } from 'react-icons/fi';

// --- COMPOSANTS UTILITAIRES ---

const ListingCard = ({ item }) => (
  <div 
    className="flex bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
  >
    <img src={item.image} alt={item.name} className="w-1/3 h-40 object-cover" />
    <div className="p-4 flex flex-col justify-between w-2/3">
      <div>
        <h3 className="text-xl font-semibold text-blue-700">{item.name}</h3>
        <p className="text-sm text-gray-500 flex items-center mt-1">
          <FiMapPin className="w-4 h-4 mr-1" /> {item.city} - {item.category.toUpperCase()}
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
  </div>
);


// --- COMPOSANT PRINCIPAL DE RECHERCHE ---

export default function Results() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ''; // Récupère le terme de recherche 'q'
  
  // Utilitaire pour extraire tous les mots-clés de toutes les catégories
  const categoryKeywords = CATEGORY_KEYWORDS.flatMap(cat => cat.keywords).join(', ').toLowerCase().split(', ');
  
  // Fonction pour simplifier le texte (minuscule, sans accent, trim)
  const normalize = (text) => text.toLowerCase().trim();

  // Logique de filtrage (Optimisée par useMemo)
  const searchResults = useMemo(() => {
    if (!query) return [];

    const normalizedQuery = normalize(query);
    
    return MOCK_LISTINGS.filter(item => {
      const normalizedName = normalize(item.name);
      const normalizedCity = normalize(item.city);
      const normalizedCategory = normalize(item.category);
      
      // La correspondance est réussie si le terme est trouvé dans :
      return (
        normalizedName.includes(normalizedQuery) ||
        normalizedCity.includes(normalizedQuery) ||
        normalizedCategory.includes(normalizedQuery) ||
        // Si le terme de recherche correspond à un mot-clé de catégorie
        categoryKeywords.some(keyword => normalizedQuery.includes(normalize(keyword)))
      );
    });
  }, [query, categoryKeywords]);


  // RENDU
  const title = query 
    ? `Résultats pour "${query}"`
    : "Veuillez entrer un terme de recherche.";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2 border-blue-600">
        {title} ({searchResults.length} trouvé(s))
      </h1>
      
      <div className="space-y-6">
        {searchResults.length > 0 ? (
          searchResults.map(item => (
            <ListingCard key={item.id} item={item} />
          ))
        ) : (
          <div className="bg-yellow-50 p-6 rounded-lg text-center text-yellow-700">
            <p className="font-semibold">
              Aucun résultat trouvé correspondant à votre recherche. Essayez "voiture" ou "Abidjan".
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
              Retour à l'accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}