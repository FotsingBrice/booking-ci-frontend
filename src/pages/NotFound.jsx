// src/pages/NotFound.jsx

import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiAlertTriangle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white p-8">
      
      <FiAlertTriangle className="w-20 h-20 text-red-500 mb-6" />

      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        404
      </h1>
      
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Page Non Trouvée
      </h2>
      
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Désolé, nous n'avons pas pu trouver la page que vous recherchez. 
        Il se peut que vous ayez mal saisi l'adresse ou que la page ait été déplacée.
      </p>

      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        <FiArrowLeftCircle className="w-5 h-5 mr-3" />
        Retourner à l'Accueil
      </Link>
    </div>
  );
}