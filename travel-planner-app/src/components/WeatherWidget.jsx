import { useState, useEffect } from 'react'

function WeatherWidget({ city, country }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Weather data unavailable')
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
  }, [city, country])

  if (loading) {
    return (
      <div className="bg-blue-50 rounded-xl p-6">
        <p className="text-blue-600">Loading weather...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-50 rounded-xl p-6">
        <p className="text-gray-500 text-sm">Weather data unavailable</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">Current Weather</p>
          <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-sm capitalize mt-1">{weather.weather[0].description}</p>
        </div>
        <div className="text-6xl">
          {weather.weather[0].main === 'Clear' && '☀️'}
          {weather.weather[0].main === 'Clouds' && '☁️'}
          {weather.weather[0].main === 'Rain' && '🌧️'}
          {weather.weather[0].main === 'Snow' && '❄️'}
          {!['Clear', 'Clouds', 'Rain', 'Snow'].includes(weather.weather[0].main) && '🌤️'}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-blue-300">
        <div>
          <p className="text-xs opacity-75">Humidity</p>
          <p className="font-semibold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-xs opacity-75">Wind Speed</p>
          <p className="font-semibold">{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget