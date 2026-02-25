import { useParams, Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import WeatherWidget from '../components/WeatherWidget'

function DestinationDetails() {
  const { id } = useParams()
  const destination = destinations.find(d => d.id === parseInt(id))

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{destination.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div 
            className="h-96 rounded-2xl flex items-center justify-center text-8xl"
            style={{ backgroundColor: destination.color }}
          >
            {destination.emoji}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Title & Description */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {destination.name}
                  </h1>
                  <p className="text-xl text-gray-600">{destination.country}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">⭐</span>
                  <span className="text-2xl font-bold">{destination.rating}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{destination.description}</p>
            </div>

            {/* Attractions */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Attractions</h2>
              <div className="space-y-4">
                {destination.attractions.map((attraction, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">
                        {attraction.type === 'Museum' && '🏛️'}
                        {attraction.type === 'Landmark' && '🗼'}
                        {attraction.type === 'Temple' && '⛩️'}
                        {attraction.type === 'Beach' && '🏖️'}
                        {attraction.type === 'Nature' && '🌳'}
                        {attraction.type === 'Historic' && '🏰'}
                        {!['Museum', 'Landmark', 'Temple', 'Beach', 'Nature', 'Historic'].includes(attraction.type) && '📍'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{attraction.name}</h3>
                      <p className="text-sm text-gray-600">{attraction.description}</p>
                      <span className="inline-block mt-2 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {attraction.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodations */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Stay</h2>
              <div className="space-y-4">
                {destination.accommodations.map((hotel, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900">{hotel.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">${hotel.price}</p>
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            
            {/* Weather Widget */}
            <WeatherWidget city={destination.weather.city} country={destination.weather.country} />

            {/* Price Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Trip Budget</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">From</span>
                  <span className="text-2xl font-bold text-blue-600">${destination.priceFrom}</span>
                </div>
                <p className="text-sm text-gray-500">per night</p>
              </div>
            </div>

            {/* Add to Trip Button */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
              Add to My Trip
            </button>

            {/* Quick Info */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination:</span>
                  <span className="font-medium">{destination.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Country:</span>
                  <span className="font-medium">{destination.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium">⭐ {destination.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Attractions:</span>
                  <span className="font-medium">{destination.attractions.length}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

export default DestinationDetails