import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
         <Link to="/" className="text-2xl font-bold text-blue-600">
  🌍 TravelPlanner
</Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
  Home
</Link>
<Link to="/trips" className="text-gray-700 hover:text-blue-600 font-medium transition">
  My Trips
</Link>
<Link to="/budget" className="text-gray-700 hover:text-blue-600 font-medium transition">
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar