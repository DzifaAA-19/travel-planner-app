import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
     
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Plan Your Next Adventure
          </h1>
          <p className="text-xl mb-10 text-blue-100">
            Discover, plan and budget your dream trip
          </p>
          
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-2 flex items-center">
            <div className="flex items-center flex-1 px-4">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text"
                placeholder="Where do you want to go?"
                className="flex-1 py-3 text-gray-700 text-lg outline-none"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Popular Destinations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>

    </div>
  )
}

export default LandingPage