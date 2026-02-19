function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg text-center">
        <div className="text-6xl mb-4">🌍</div>
        <h1 className="text-5xl font-bold text-primary mb-4">
          Travel Planner
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Your journey begins here!
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App