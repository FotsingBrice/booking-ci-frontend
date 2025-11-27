// src/pages/Detail.jsx

import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MOCK_LISTINGS } from '../data/listings.js';
import { CartContext } from '../context/CartContext.jsx'; // Import du contexte du panier
import { FiMapPin, FiStar, FiCalendar, FiPlusSquare, FiArrowLeft } from 'react-icons/fi';


export default function Detail() {
  const { categorySlug, itemId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Utilisation du contexte

  // 1. Trouver l'article
  const item = MOCK_LISTINGS.find(
    (listing) => listing.id === itemId && listing.category === categorySlug
  );

  // Gérer le cas où l'article n'existe pas (404)
  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Article Non Trouvé</h1>
        <p className="text-lg text-gray-700">
          L'article avec l'ID "{itemId}" dans la catégorie "{categorySlug}" n'existe pas.
        </p>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <FiArrowLeft className="mr-2" /> Retour
        </button>
      </div>
    );
  }

  // 2. Fonction d'ajout au panier
  const handleAddToCart = () => {
    // Dans un cas réel, vous demanderiez une quantité et des dates.
    // Pour l'instant, on ajoute l'objet complet.
    addToCart(item);
    
    // Redirection vers le panier après ajout (facultatif)
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="text-blue-600 hover:text-blue-800 flex items-center mb-6"
      >
        <FiArrowLeft className="mr-2" /> Retour à la liste
      </button>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* IMAGE PRINCIPALE */}
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-96 object-cover" 
        />
        
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SECTION DÉTAILS */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900">{item.name}</h1>
            
            <div className="flex items-center text-xl text-gray-600 gap-6">
              <span className="flex items-center text-blue-600 font-semibold">
                <FiMapPin className="mr-2" /> {item.city}
              </span>
              <span className="flex items-center text-yellow-500 font-semibold">
                <FiStar className="mr-2" /> {item.rating} / 5
              </span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Le meilleur choix pour votre séjour à {item.city}. 
              Ce service est un excellent exemple de la catégorie {item.category} disponible sur BookingCI.
              {/* Ajoutez ici une description plus longue si disponible dans MOCK_LISTINGS */}
            </p>
            
            {/* CARACTÉRISTIQUES CLÉS */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 border-t pt-4">
              <p>✅ Climatisation</p>
              <p>✅ Assurance incluse</p>
              <p>✅ Support 24/7</p>
              <p>✅ Livré à l'aéroport</p>
            </div>
          </div>
          
          {/* SECTION RÉSERVATION / AJOUT AU PANIER */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit shadow-md space-y-4">
            <div className="text-4xl font-bold text-green-600">
              {item.price.toLocaleString('fr-FR')} FCFA <span className="text-lg text-gray-500 font-medium">/ jour</span>
            </div>
            
            <div className="flex items-center border border-gray-300 p-3 rounded-md bg-white">
              <FiCalendar className="text-blue-600 mr-3" />
              <input type="date" className="flex-grow focus:outline-none" defaultValue={new Date().toISOString().substring(0, 10)} />
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <FiPlusSquare className="w-5 h-5 mr-3" /> Ajouter au panier
            </button>

            <p className="text-xs text-center text-gray-500">
              Votre réservation n'est pas finalisée tant que vous ne payez pas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}