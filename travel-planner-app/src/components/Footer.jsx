function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">🌍 TravelPlanner</h3>
            <p className="text-gray-400 text-sm">
              Plan your perfect trip with ease. Destinations, itineraries, and budgets all in one place.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/destinations" className="hover:text-white transition">Destinations</a></li>
              <li><a href="/trips" className="hover:text-white transition">My Trips</a></li>
              <li><a href="/budget" className="hover:text-white transition">Budget</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 TravelPlanner. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer