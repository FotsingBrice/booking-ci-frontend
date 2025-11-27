export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-4">Booking CI</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">À propos</a></li>
            <li><a href="#" className="hover:text-white">Comment ça marche</a></li>
            <li><a href="#" className="hover:text-white">Carrières</a></li>
            <li><a href="#" className="hover:text-white">Presse</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Hôtels</a></li>
            <li><a href="#" className="hover:text-white">Véhicules</a></li>
            <li><a href="#" className="hover:text-white">Loisirs</a></li>
            <li><a href="#" className="hover:text-white">Santé</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Assistance</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Centre d’aide</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Conditions</a></li>
            <li><a href="#" className="hover:text-white">Confidentialité</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Réseaux sociaux</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-xs">
        © 2025 Booking CI – Tous droits réservés
      </div>
    </footer>
  )
}