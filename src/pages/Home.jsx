import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import { FaCar, FaBus, FaTruck } from 'react-icons/fa'; // Icônes de transport

// Définition des catégories prioritaires pour la cliente
const transportCategories = [
  { 
    name: 'Location de Voitures', 
    slug: 'cars', 
    icon: FaCar, 
    description: "Berlines, 4x4, véhicules de luxe." 
  },
  { 
    name: 'Bus & Autocars', 
    slug: 'bus', 
    icon: FaBus, 
    description: "Transport privé 20, 50 places ou minibus." 
  },
  { 
    name: 'Engins de Chantier', 
    slug: 'construction', 
    icon: FaTruck, 
    description: "Grues, camions, machines spécialisées." 
  },
];

// Les anciens highlights sont toujours là, mais affichés après
const highlights = [
  { id: 1, name: 'Ivotel', city: 'Abidjan', phone: '225 01 23 45 67', category: 'Hôtel', rating: 4.5, cover: 'https://source.unsplash.com/400x300/?hotel,ivory-coast' },
  { id: 2, name: 'Spa Cocody', city: 'Cocody', phone: '225 08 76 54 32', category: 'Bien-être', rating: 4.8, cover: 'https://source.unsplash.com/400x300/?spa,wellness' },
  // ... à remplir avec ton JSON
]


// Nouveau composant simple pour afficher les catégories de transport
const CategoryCard = ({ category }) => (
  <Link 
    to={`/${category.slug}`} 
    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-500"
  >
    <category.icon className="w-12 h-12 text-blue-600 mb-3" />
    <h3 className="text-xl font-semibold text-gray-800 text-center">{category.name}</h3>
    <p className="text-sm text-gray-500 text-center mt-1">{category.description}</p>
  </Link>
);


export default function Home() {
  return (
    <div className="px-4 py-8 md:py-12 space-y-12 max-w-7xl mx-auto">
      
      {/* SECTION 1: TRANSPORT PRIORITAIRE */}
      <section>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2 border-blue-500">
          Recherchez les Services de Mobilité (Priorité Client)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {transportCategories.map(cat => <CategoryCard key={cat.slug} category={cat} />)}
        </div>
      </section>


      {/* SECTION 2: Ancien "À la une" (Hôtels, etc.) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Autres Services à la Une</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(item => <Card key={item.id} item={item} />)}
        </div>
      </section>

      {/* SECTION 3: Hero simple (l'image d'avant, sans recherche ici car la Navbar est déjà là) */}
      <section className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
        <img 
            src="https://source.unsplash.com/1600x900/?africa,transport" // Nouvelle image thématique
            alt="Transport en Côte d'Ivoire" 
            className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold">Un réseau fiable pour tous vos besoins</h3>
          <p className="text-sm md:text-lg">Hébergement, transport, et loisirs à portée de main.</p>
        </div>
      </section>
      
    </div>
  )
}