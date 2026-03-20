import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Desktop Version */}
      <div className="hidden md:flex bg-white rounded-2xl shadow-2xl p-2 items-center">
        <div className="flex items-center flex-1 px-4">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Where do you want to go?"
            className="flex-1 py-3 text-gray-700 text-lg outline-none"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden space-y-3">
        <div className="bg-white rounded-xl shadow-lg p-4 flex items-center">
          <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Where do you want to go?"
            className="flex-1 py-2 text-gray-700 outline-none"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg text-lg"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar