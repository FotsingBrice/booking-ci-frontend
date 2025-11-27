// src/pages/Cart.jsx

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx'; // Utilisation du contexte créé
import { FiTrash, FiShoppingCart, FiArrowLeft, FiDollarSign } from 'react-icons/fi';


export default function Cart() {
  const { cartItems, removeFromCart, clearCart, total } = useContext(CartContext);
  const navigate = useNavigate();
  
  // Simuler la validation de la commande
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    alert(`Commande de ${total.toLocaleString('fr-FR')} FCFA passée avec succès !`);
    clearCart(); // Vider le panier après la commande (simulée)
    navigate('/');
  };


  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2 border-blue-600 flex items-center">
        <FiShoppingCart className="mr-3" /> Votre Panier
      </h1>
      
      {/* BOUTON RETOUR */}
      <button 
        onClick={() => navigate(-1)} 
        className="text-blue-600 hover:text-blue-800 flex items-center mb-6"
      >
        <FiArrowLeft className="mr-2" /> Continuer vos achats
      </button>

      {cartItems.length === 0 ? (
        <div className="bg-yellow-50 p-8 rounded-lg text-center text-yellow-700 shadow-md">
          <p className="font-semibold text-xl">
            Votre panier est vide.
          </p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-medium">
            Découvrez nos services sur la page d'accueil !
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE : LISTE DES ARTICLES */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex bg-white rounded-lg shadow-md p-4 items-center border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-md mr-4" 
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.city} - {item.category}</p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-lg font-bold text-green-600 mb-1">
                    {item.price.toLocaleString('fr-FR')} FCFA
                  </span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1"
                  >
                    <FiTrash className="mr-1 w-4 h-4" /> Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* COLONNE DROITE : RÉSUMÉ ET PAIEMENT */}
          <div className="lg:col-span-1 sticky top-24 h-fit bg-white p-6 rounded-lg shadow-lg border border-blue-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">Résumé de la commande</h2>
            
            <div className="flex justify-between font-medium text-lg">
              <span>Sous-total ({cartItems.length} article(s)) :</span>
              <span className="text-gray-800">{total.toLocaleString('fr-FR')} FCFA</span>
            </div>
            
            <div className="flex justify-between font-bold text-xl text-blue-700 border-t pt-3">
              <span>Total final :</span>
              <span>{total.toLocaleString('fr-FR')} FCFA</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              <FiDollarSign className="w-5 h-5 mr-3" /> Procéder au paiement
            </button>
            
            <button
              onClick={clearCart}
              className="w-full text-red-500 hover:text-red-700 text-sm mt-2 border border-red-200 p-2 rounded-md"
            >
              Vider tout le panier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}