// src/pages/Login.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiLock, FiLogIn } from 'react-icons/fi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // --- LOGIQUE DE CONNEXION SIMPLIFIÉE ---
    if (email === 'client@test.ci' && password === 'bookingci') {
      // Simuler la connexion (dans un vrai contexte, vous stockeriez un token)
      console.log('Connexion réussie !');
      alert('Connexion réussie ! Bienvenue, client.');
      navigate('/'); // Redirection vers la page d'accueil après succès
    } else {
      setError('Email ou mot de passe incorrect. Utilisez client@test.ci / bookingci');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Connectez-vous à votre compte
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            
            {/* EMAIL */}
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            {/* MOT DE PASSE */}
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* MESSAGE D'ERREUR */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              {error}
            </div>
          )}

          {/* BOUTON DE CONNEXION */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <FiLogIn className="w-5 h-5 mr-2" />
              Se connecter
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            Pas encore de compte ?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Inscrivez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}