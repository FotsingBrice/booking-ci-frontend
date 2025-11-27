// src/context/CartContext.jsx

import React, { createContext, useState } from 'react';

// 1. Création du Context
// Il DOIT être exporté comme une exportation nommée (export const) pour que Detail.jsx le trouve.
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {}, // Fonction factice par défaut
  removeFromCart: () => {},
  clearCart: () => {},
  total: 0,
});

// 2. Création du Provider
// Il DOIT également être exporté comme une exportation nommée pour que main.jsx le trouve.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un article (simplifiée pour le moment)
  const addToCart = (item) => {
    // Dans ce modèle, on ajoute l'article avec une quantité de 1
    const existingItem = cartItems.find(i => i.id === item.id);
    
    if (existingItem) {
        // Optionnel : Incrémenter la quantité si déjà dans le panier
        console.log(`L'article ${item.name} est déjà dans le panier.`);
    } else {
        setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        console.log(`${item.name} ajouté au panier.`);
    }
  };

  // Fonction pour retirer un article (sera utilisée dans la page Panier)
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  // Fonction pour vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcul du total
  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  // Valeur fournie à tous les composants enfants
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};