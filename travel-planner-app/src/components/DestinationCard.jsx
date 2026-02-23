import { Link } from 'react-router-dom'

function DestinationCard({ destination }) {
  return (
        < Link to={`/destinations/${destination.id}`} className="block">
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      
      {/* Colored Top Section */}
      <div 
        className="h-40 flex items-center justify-center text-5xl"
        style={{ backgroundColor: destination.color }}
      >
        {destination.emoji}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {destination.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {destination.country}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">
            From <span className="font-semibold text-blue-600">${destination.priceFrom}</span>/night
          </span>
          <span className="text-yellow-500">
            ⭐ {destination.rating}
          </span>
        </div>
      </div>

    </div>
    </Link>
  )
}

export default DestinationCard