// src/components/BottomBar.jsx (Code mis à jour)

import { Link, useLocation } from 'react-router-dom'
// Assurez-vous que FiShoppingCart et FiUser sont bien importés
import { FiHome, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi' 

const items = [
  { to: '/', icon: FiHome, label: 'Accueil' },
  // Lien vers la recherche (peut renvoyer à l'accueil ou aux résultats)
  { to: '/results', icon: FiSearch, label: 'Rechercher' }, 
  // 🎯 NOUVEAU LIEN : Le Panier
  { to: '/cart', icon: FiShoppingCart, label: 'Panier' }, 
  // 🎯 NOUVEAU LIEN : Le Compte Client
  { to: '/account', icon: FiUser, label: 'Compte' }, 
]

export default function BottomBar() {
  const location = useLocation()
  
  // Fonction pour vérifier si le lien est actif (plus précis que la simple égalité)
  const isActive = (to) => {
      // Pour les routes simples comme /cart, /account
      if (location.pathname.startsWith(to) && to !== '/') return true; 
      // Cas spécifique de l'accueil (index)
      if (to === '/' && location.pathname === '/') return true;
      return false;
  }

  return (
    // 'md:hidden' assure que cette barre n'apparaît que sur mobile
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40 shadow-xl">
      <div className="flex justify-around items-center h-16">
        {items.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center text-xs p-2 transition-colors duration-200 ${
              isActive(to) ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}