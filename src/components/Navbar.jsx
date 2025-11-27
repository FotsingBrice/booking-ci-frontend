import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { CATEGORY_KEYWORDS } from '../data/keywords.js'; // <-- Import CRITIQUE

export default function Navbar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) return;
    // Redirection vers la page de résultats
    window.location.href = `/results?q=${encodeURIComponent(query)}`;
  };
  
  // Catégories prioritaires pour le menu (utilisez vos slugs)
  const menuCategories = CATEGORY_KEYWORDS.filter(cat => 
    ['hotels', 'cars', 'activities', 'health', 'agencies', 'bus', 'construction'].includes(cat.slug)
  );

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO  */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">BookingCI</span>
          </Link>

          {/* BARRE DE RECHERCHE CENTRALE  */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:flex">
            <div className="w-full flex rounded-full border border-gray-300 shadow-sm overflow-hidden">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow px-5 py-3 text-sm focus:outline-none"
                placeholder="Rechercher un hôtel, une voiture, un loisir…"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium"
              >
                Rechercher
              </button>
            </div>
          </div>

          {/* ICONES DROITE  */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="text-gray-700 hover:text-blue-700">
                <FiShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-700 flex items-center gap-1">
                <FiUser className="w-6 h-6" /> Connexion
            </Link>
          </div>
        </div>
        
        {/* MENU DE NAVIGATION DES CATÉGORIES (Grand Écran) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 py-3 border-t">
          {menuCategories.map(cat => (
              <Link key={cat.slug} to={`/${cat.slug}`} className="hover:text-blue-700">
                  {/* Utilise le nom complet ou seulement le premier mot */}
                  {cat.name.split(' ')[0]} 
              </Link>
          ))}
        </nav>

        {/* BARRE DE RECHERCHE MOBILE */}
        <div className="md:hidden pb-4">
          <div className="flex rounded-full border border-gray-300 shadow-sm overflow-hidden">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow px-4 py-2 text-sm focus:outline-none"
              placeholder="Rechercher..."
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm"
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}