import { useState } from 'react'

// Utilise 'export const' au lieu de 'export default function'
export const useAuth = () => { // <--- CORRECTION MAJEURE ICI
  const [user, setUser] = useState(() => {
    // Tente de récupérer l'utilisateur dans le stockage local au chargement initial
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  // Fonction de connexion : définit l'utilisateur et l'enregistre dans localStorage
  const login = (u) => {
    setUser(u)
    localStorage.setItem('user', JSON.stringify(u))
  }
  
  // Fonction de déconnexion : supprime l'utilisateur et le retire de localStorage
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // Renvoie l'état de l'utilisateur et les fonctions d'authentification
  return { user, login, logout }
}

// Maintenant, dans Login.jsx, l'importation doit être :
// import { useAuth } from '../hooks/useAuth.js';