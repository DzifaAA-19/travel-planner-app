import { useState, useEffect } from 'react'

function WeatherTest() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Get API key from environment variable
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
    
    // City to test (Paris)
    const city = 'Paris'
    
    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    
    // Fetch weather data
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('API key might not be active yet (takes 1-2 hours)')
        }
        return response.json()
      })
      .then(data => {
        setWeather(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 m-4">
        <p className="text-blue-600">🔄 Loading weather data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 m-4">
        <h3 className="text-red-600 font-bold mb-2">❌ Error</h3>
        <p className="text-red-600">{error}</p>
        <p className="text-sm text-red-500 mt-2">
          Note: New API keys take 1-2 hours to activate. Try again later!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 m-4">
      <h3 className="text-green-600 font-bold text-xl mb-4">
        ✅ API Test Successful!
      </h3>
      
      <div className="space-y-2">
        <p className="text-gray-700">
          <strong>City:</strong> {weather.name}, {weather.sys.country}
        </p>
        <p className="text-gray-700">
          <strong>Temperature:</strong> {Math.round(weather.main.temp)}°C
        </p>
        <p className="text-gray-700">
          <strong>Weather:</strong> {weather.weather[0].description}
        </p>
        <p className="text-gray-700">
          <strong>Humidity:</strong> {weather.main.humidity}%
        </p>
        <p className="text-gray-700">
          <strong>Wind Speed:</strong> {weather.wind.speed} m/s
        </p>
      </div>

      <div className="mt-4 p-4 bg-white rounded-lg">
        <p className="text-sm text-gray-600 font-semibold mb-2">Raw API Response:</p>
        <pre className="text-xs text-gray-600 overflow-auto">
          {JSON.stringify(weather, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default WeatherTest