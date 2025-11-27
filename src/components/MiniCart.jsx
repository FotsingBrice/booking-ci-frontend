import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { FiTrash, FiPlus, FiMinus } from 'react-icons/fi'

export default function MiniCart() {
  const [open, setOpen] = useState(false)
  const { items, updateQty, removeItem, total } = useCart()

  return (
    <div className="relative">
      {/* ICÔNE PANIER + BADGE */}
      <button onClick={() => setOpen(!open)} className="relative hover:text-blue-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {items.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
            {items.reduce((s, p) => s + p.qty, 0)}
          </span>
        )}
      </button>

      {/* DROPDOWN  */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-sm text-gray-500">Votre panier est vide.</p>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.price} € x {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="p-1 hover:bg-gray-100 rounded">
                      <FiMinus />
                    </button>
                    <span className="text-sm w-6 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-1 hover:bg-gray-100 rounded">
                      <FiPlus />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="p-1 hover:bg-gray-100 rounded text-red-500">
                      <FiTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* TOTAL + CHECKOUT  */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total</span>
                <span className="font-bold">{total.toFixed(2)} €</span>
              </div>
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="w-full block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}