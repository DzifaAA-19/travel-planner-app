import { Link } from 'react-router-dom'

function DestinationCard({ destination }) {
  return (
    <Link to={`/destinations/${destination.id}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        
        {/* Image */}
        <div className="h-48 relative overflow-hidden">
          <img 
            src={destination.imageUrl} 
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x300/4F46E5/ffffff?text=${destination.name}`
            }}
          />
          
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
            {destination.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {destination.country}
          </p>
          
          {/* Info */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              From <span className="font-semibold text-blue-600">${destination.priceFrom}</span>/night
            </span>
            <span className="flex items-center text-yellow-500">
              ⭐ {destination.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DestinationCard