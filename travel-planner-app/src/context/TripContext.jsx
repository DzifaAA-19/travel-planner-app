import { createContext, useState, useContext, useEffect } from 'react'

const TripContext = createContext()

export function TripProvider({ children }) {
  const [trips, setTrips] = useState([])
  const [currentTrip, setCurrentTrip] = useState(null)

  // Load trips from localStorage on mount
  useEffect(() => {
    const savedTrips = localStorage.getItem('travelPlannerTrips')
    if (savedTrips) {
      const parsedTrips = JSON.parse(savedTrips)
      setTrips(parsedTrips)
      if (parsedTrips.length > 0) {
        setCurrentTrip(parsedTrips[0])
      }
    }
  }, [])

  // Save trips to localStorage whenever they change
  useEffect(() => {
    if (trips.length > 0) {
      localStorage.setItem('travelPlannerTrips', JSON.stringify(trips))
    }
  }, [trips])

  const addTrip = (trip) => {
    const newTrip = {
      id: Date.now(),
      ...trip,
      activities: []
    }
    setTrips([...trips, newTrip])
    setCurrentTrip(newTrip)
  }

  const addActivity = (tripId, activity) => {
    setTrips(trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          activities: [...trip.activities, { ...activity, id: Date.now() }]
        }
      }
      return trip
    }))
  }

  const deleteActivity = (tripId, activityId) => {
    setTrips(trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          activities: trip.activities.filter(a => a.id !== activityId)
        }
      }
      return trip
    }))
  }

  const updateActivity = (tripId, activityId, updates) => {
    setTrips(trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          activities: trip.activities.map(a => 
            a.id === activityId ? { ...a, ...updates } : a
          )
        }
      }
      return trip
    }))
  }

  const updateTripBudget = (tripId, budget) => {
    setTrips(trips.map(trip => 
      trip.id === tripId ? { ...trip, budget: budget } : trip
    ))
  }

  const addExpense = (tripId, expense) => {
    setTrips(trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          expenses: [...(trip.expenses || []), { ...expense, id: Date.now() }]
        }
      }
      return trip
    }))
  }

  const deleteExpense = (tripId, expenseId) => {
    setTrips(trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          expenses: (trip.expenses || []).filter(e => e.id !== expenseId)
        }
      }
      return trip
    }))
  }

  const updateExpense = (tripId, expenseId, updates) => {
    setTrips(trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          expenses: (trip.expenses || []).map(e => 
            e.id === expenseId ? { ...e, ...updates } : e
          )
        }
      }
      return trip
    }))
  }

  return (
    <TripContext.Provider value={{
      trips,
      currentTrip,
      setCurrentTrip,
      addTrip,
      addActivity,
      deleteActivity,
      updateActivity,
      updateTripBudget,
      addExpense,
      deleteExpense,
      updateExpense
    }}>
      {children}
    </TripContext.Provider>
  )
}

export function useTrips() {
  const context = useContext(TripContext)
  if (!context) {
    throw new Error('useTrips must be used within TripProvider')
  }
  return context
}