import { useState } from 'react'
import { getWeatherByCity } from '../services/weatherService'

function WeatherTest() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const testWeather = async () => {
    setLoading(true)
    const data = await getWeatherByCity('London')
    setWeather(data)
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Weather API Test</h2>
      
      <button 
        onClick={testWeather}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full mb-4"
      >
        Test Weather API (London)
      </button>

      {loading && (
        <p className="text-gray-600">Loading weather data...</p>
      )}

      {weather && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-lg">{weather.city}, {weather.country}</h3>
          <p className="text-3xl font-bold my-2">{weather.temp}°C</p>
          <p className="text-gray-700 capitalize">{weather.description}</p>
          <div className="mt-2 text-sm text-gray-600">
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind: {weather.windSpeed} m/s</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default WeatherTest