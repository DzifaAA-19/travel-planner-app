function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            🌍 TravelPlanner
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/trips" className="text-gray-700 hover:text-blue-600">My Trips</a>
            <a href="/budget" className="text-gray-700 hover:text-blue-600">Budget</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg" hover:text-blue-600>
              Sign In
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar