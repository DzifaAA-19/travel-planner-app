function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg text-center">
        <div className="text-6xl mb-4">🌍</div>
        <h1 className="text-5xl font-bold text-primary mb-4">
          Travel Planner
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Your journey begins here! Plan destinations, track budgets, and create amazing itineraries.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            ✅ React is working!
          </p>
          <p className="text-sm text-gray-500">
            ✅ Tailwind CSS is working!
          </p>
          <p className="text-sm text-gray-500">
            ✅ Ready to build your app!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App