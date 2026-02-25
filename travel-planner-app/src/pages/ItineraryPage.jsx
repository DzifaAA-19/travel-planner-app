import { useState } from 'react'
import { useTrips } from '../context/TripContext'
import { Link } from 'react-router-dom'

function ItineraryPage() {
  const { trips, currentTrip, setCurrentTrip, addActivity, deleteActivity } = useTrips()
  const [selectedDate, setSelectedDate] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newActivity, setNewActivity] = useState({
    name: '',
    time: '',
    description: '',
    category: 'activity',
    cost: ''
  })

  // If no trips, show empty state
  if (trips.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📅</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Trips Yet</h1>
          <p className="text-gray-600 mb-8">
            Start planning your adventure by adding a destination to your trip!
          </p>
          <Link 
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    )
  }

  // Get dates for current trip
  const getDatesInRange = (start, end) => {
    const dates = []
    const currentDate = new Date(start)
    const endDate = new Date(end)
    
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return dates
  }

  const tripDates = currentTrip ? getDatesInRange(currentTrip.startDate, currentTrip.endDate) : []

  // Get activities for selected date
  const getActivitiesForDate = (date) => {
    if (!currentTrip) return []
    const dateStr = date.toISOString().split('T')[0]
    return currentTrip.activities.filter(a => a.date === dateStr)
  }

  const handleAddActivity = () => {
    if (!newActivity.name || !newActivity.time || !selectedDate) {
      alert('Please fill in all required fields')
      return
    }

    addActivity(currentTrip.id, {
      ...newActivity,
      date: selectedDate.toISOString().split('T')[0]
    })

    setNewActivity({ name: '', time: '', description: '', category: 'activity', cost: '' })
    setShowAddModal(false)
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Trips</h1>
          <p className="text-gray-600">Plan your daily activities and itinerary</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Trip Selector */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4">Your Trips</h2>
              <div className="space-y-2">
                {trips.map(trip => (
                  <button
                    key={trip.id}
                    onClick={() => setCurrentTrip(trip)}
                    className={`w-full text-left p-4 rounded-lg transition ${
                      currentTrip?.id === trip.id 
                        ? 'bg-blue-50 border-2 border-blue-500' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{trip.emoji}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{trip.destination}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            {currentTrip && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Trip Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{tripDates.length} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Activities</span>
                    <span className="font-semibold">{currentTrip.activities.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-semibold">
                      ${currentTrip.activities.reduce((sum, a) => sum + (parseFloat(a.cost) || 0), 0)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content - Calendar & Activities */}
          <div className="lg:col-span-3 space-y-6">
            
            {currentTrip && (
              <>
                {/* Date Selector */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-gray-900 mb-4">Select Date</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {tripDates.map((date, index) => {
                      const isSelected = selectedDate?.toDateString() === date.toDateString()
                      const activities = getActivitiesForDate(date)
                      
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 rounded-lg text-center transition ${
                            isSelected 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <p className={`text-xs font-medium mb-1 ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </p>
                          <p className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                            {date.getDate()}
                          </p>
                          {activities.length > 0 && (
                            <p className={`text-xs mt-1 ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                              {activities.length} {activities.length === 1 ? 'activity' : 'activities'}
                            </p>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Activities for Selected Date */}
                {selectedDate && (
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {formatDate(selectedDate)}
                      </h2>
                      <button 
                        onClick={() => setShowAddModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        + Add Activity
                      </button>
                    </div>

                    <div className="space-y-4">
                      {getActivitiesForDate(selectedDate).length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-gray-500">No activities planned for this day</p>
                          <button 
                            onClick={() => setShowAddModal(true)}
                            className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                          >
                            Add your first activity
                          </button>
                        </div>
                      ) : (
                        getActivitiesForDate(selectedDate)
                          .sort((a, b) => a.time.localeCompare(b.time))
                          .map(activity => (
                            <div 
                              key={activity.id}
                              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                            >
                              <div className="flex-shrink-0 w-20 text-center">
                                <p className="text-sm font-semibold text-blue-600">{activity.time}</p>
                              </div>
                              
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">{activity.name}</h3>
                                {activity.description && (
                                  <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                                )}
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                    {activity.category}
                                  </span>
                                  {activity.cost && (
                                    <span className="text-gray-600">💰 ${activity.cost}</span>
                                  )}
                                </div>
                              </div>
                              
                              <button 
                                onClick={() => deleteActivity(currentTrip.id, activity.id)}
                                className="text-red-500 hover:text-red-700 p-2"
                              >
                                🗑️
                              </button>
                            </div>
                          ))
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

          </div>

        </div>
      </div>

      {/* Add Activity Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">Add Activity</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Activity Name *
                </label>
                <input 
                  type="text"
                  value={newActivity.name}
                  onChange={(e) => setNewActivity({...newActivity, name: e.target.value})}
                  placeholder="e.g., Visit Eiffel Tower"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time *
                </label>
                <input 
                  type="time"
                  value={newActivity.time}
                  onChange={(e) => setNewActivity({...newActivity, time: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select 
                  value={newActivity.category}
                  onChange={(e) => setNewActivity({...newActivity, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="activity">Activity</option>
                  <option value="food">Food</option>
                  <option value="transport">Transport</option>
                  <option value="accommodation">Accommodation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea 
                  value={newActivity.description}
                  onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                  placeholder="Add details about this activity..."
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Cost ($)
                </label>
                <input 
                  type="number"
                  value={newActivity.cost}
                  onChange={(e) => setNewActivity({...newActivity, cost: e.target.value})}
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddActivity}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Add Activity
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ItineraryPage