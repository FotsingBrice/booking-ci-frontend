// src/pages/Account.jsx

import { useState } from 'react';
import { FiUser, FiList, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Données de l'utilisateur simulées (à remplacer par le contexte utilisateur)
const MOCK_USER = {
  name: "Fotsing Brice",
  email: "client@test.ci",
  joined: "Depuis Janvier 2023",
};

// Données d'historique de commandes simulées
const MOCK_ORDERS = [
    { id: '1001', service: 'SUV Land Cruiser V8', date: '2025-05-15', total: 400000, status: 'Terminée' },
    { id: '1002', service: 'Bus Privé 50 Places', date: '2025-10-20', total: 150000, status: 'Annulée' },
    { id: '1003', service: 'Berline Hyundai Accent', date: '2025-11-20', total: 75000, status: 'En cours' },
];

const menuItems = [
    { id: 'profile', label: 'Mon Profil', icon: FiUser },
    { id: 'orders', label: 'Mes Réservations', icon: FiList },
    { id: 'favorites', label: 'Mes Favoris', icon: FiHeart },
    { id: 'settings', label: 'Paramètres', icon: FiSettings },
];

// --- COMPOSANTS DE SECTION ---

const ProfileSection = () => (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h3 className="text-2xl font-semibold border-b pb-2 mb-4">Informations Personnelles</h3>
        <div className="space-y-3">
            <p><span className="font-medium text-gray-600">Nom :</span> {MOCK_USER.name}</p>
            <p><span className="font-medium text-gray-600">Email :</span> {MOCK_USER.email}</p>
            <p><span className="font-medium text-gray-600">Membre :</span> {MOCK_USER.joined}</p>
        </div>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">Modifier le profil</button>
    </div>
);

const OrdersSection = () => (
    <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold border-b pb-2 mb-4">Historique des Réservations</h3>
        <div className="space-y-3">
            {MOCK_ORDERS.map(order => (
                <div key={order.id} className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                        <p className="font-medium">{order.service}</p>
                        <p className="text-sm text-gray-500">Du {order.date}</p>
                    </div>
                    <div className="text-right">
                        <span className={`text-sm font-semibold p-1 rounded-full ${
                            order.status === 'Terminée' ? 'bg-green-100 text-green-700' :
                            order.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                        }`}>
                            {order.status}
                        </span>
                        <p className="font-bold text-lg mt-1">{order.total.toLocaleString('fr-FR')} FCFA</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const FavoritesSection = () => (
    <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold border-b pb-2 mb-4">Mes Favoris</h3>
        <p className="text-gray-600">Vous avez 5 articles en favoris, y compris 'Hôtel Ivotel' et 'Grue Mobile 50T'.</p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">Voir tous les favoris</button>
    </div>
);

// --- COMPOSANT PRINCIPAL ---

export default function Account() {
    const [activeSection, setActiveSection] = useState('profile');
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logique de déconnexion simulée (vider le token/contexte)
        alert('Déconnexion réussie !');
        navigate('/'); // Redirection vers l'accueil
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <ProfileSection />;
            case 'orders':
                return <OrdersSection />;
            case 'favorites':
                return <FavoritesSection />;
            case 'settings':
                return <div className="p-6 bg-white rounded-lg shadow text-gray-600">
                    <h3 className="text-2xl font-semibold border-b pb-2 mb-4">Paramètres du Compte</h3>
                    <p>Options de notification et de sécurité...</p>
                </div>;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Tableau de Bord Client</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* COLONNE GAUCHE : MENU DE NAVIGATION */}
                <nav className="md:col-span-1 bg-white p-4 rounded-lg shadow h-fit space-y-2">
                    {menuItems.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveSection(id)}
                            className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                activeSection === id 
                                ? 'bg-blue-50 text-blue-700 font-semibold' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            {label}
                        </button>
                    ))}
                    
                    {/* BOUTON DE DÉCONNEXION */}
                    <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 mt-4 border-t pt-4"
                    >
                        <FiLogOut className="w-5 h-5" />
                        Déconnexion
                    </button>
                </nav>

                {/* COLONNE DROITE : CONTENU ACTIF */}
                <div className="md:col-span-3">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}