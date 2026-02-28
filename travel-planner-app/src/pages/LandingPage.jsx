import { useState } from 'react'
import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
import SearchBar from '../components/SearchBar'
import WeatherTest from '../components/WeatherTest'


function LandingPage() {
  const [searchResults, setSearchResults] = useState(destinations)
  const [searchQuery, setSearchQuery] = useState('')

  const [isSearching, setIsSearching] = useState(false)

const handleSearch = (query) => {
  setIsSearching(true)
  setSearchQuery(query)
  
  // Simulate brief processing time for better UX
  setTimeout(() => {
    const filtered = destinations.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.country.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filtered)
    setIsSearching(false)
  }, 100)
}

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults(destinations)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Plan Your Next Adventure
          </h1>
          <p className="text-xl mb-10 text-blue-100">
            Discover, plan and budget your dream trip
          </p>
          
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* API Test Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🧪 API Test 
        </h2>
        <WeatherTest />
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Destinations'}
          </h2>
          {searchQuery && (
            <button 
              onClick={clearSearch}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear Search
            </button>
          )}
        </div>
        
        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No destinations found. Try another search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((destination) => (
              <DestinationCard 
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        )}
      </section>

    </div>
  )
}

export default LandingPage