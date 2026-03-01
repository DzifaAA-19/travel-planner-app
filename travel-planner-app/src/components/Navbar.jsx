import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            🌍 <span>TravelPlanner</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link 
              to="/trips" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              My Trips
            </Link>
            <Link 
              to="/budget" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Budget
            </Link>
            
            <button 
              onClick={() => setShowAuthModal(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition"
            >
              Home
            </Link>
            <Link 
              to="/trips" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition"
            >
              My Trips
            </Link>
            <Link 
              to="/budget" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition"
            >
              Budget
            </Link>
            <button 
              onClick={() => {
                setShowAuthModal(true)
                setMobileMenuOpen(false)
              }}
              className="w-full mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </nav>
  )
}

export default Navbar