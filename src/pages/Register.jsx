// src/pages/Register.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEdit } from 'react-icons/fi';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    
    // --- LOGIQUE D'INSCRIPTION SIMULÉE ---
    // Dans un cas réel, vous enverriez ces données à une API
    console.log('Tentative d\'inscription avec :', { name, email, password });
    
    alert(`Compte pour ${name} créé avec succès !`);
    navigate('/login'); // Redirection vers la connexion après succès
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Créez votre compte client
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm space-y-4">
            
            {/* NOM COMPLET */}
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {/* CONFIRMATION MOT DE PASSE */}
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirmez le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* MESSAGE D'ERREUR */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              {error}
            </div>
          )}

          {/* BOUTON D'INSCRIPTION */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              <FiEdit className="w-5 h-5 mr-2" />
              S'inscrire
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            Déjà un compte ?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}