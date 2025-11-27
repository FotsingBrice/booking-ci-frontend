import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Import du composant principal
import { CartProvider } from './context/CartContext.jsx' 
import './index.css' // Votre CSS principal

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)