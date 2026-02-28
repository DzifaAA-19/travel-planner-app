import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo - Left Side */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🌍 TravelPlanner
          </Link>

          {/* Desktop Navigation - Hidden on Mobile */}
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
              className="px-6 py-2 rounded-lg font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: '#2563EB',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button - Visible on Mobile Only */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  // X icon when menu is open
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu - Slides Down When Open */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/trips" 
              className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Trips
            </Link>
            <Link 
              to="/budget" 
              className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Budget
            </Link>
            <button 
              className="w-full mt-2 px-6 py-3 rounded-lg font-semibold"
              style={{
                backgroundColor: '#2563EB',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar