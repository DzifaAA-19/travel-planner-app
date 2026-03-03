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
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      {/* Mobile and Desktop Combined */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Search Input */}
          <div className="flex items-center flex-1 px-4 md:px-6 py-4 md:py-3">
            <svg 
              className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Where do you want to go?"
              className="flex-1 text-gray-700 text-base md:text-lg outline-none"
            />
          </div>
          
          {/* Search Button */}
          <button 
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 md:py-3 md:rounded-r-xl font-semibold hover:bg-blue-700 transition text-lg md:text-base"
          >
            Search
          </button>
          
        </div>
      </div>
    </form>
  )
}

export default SearchBar
