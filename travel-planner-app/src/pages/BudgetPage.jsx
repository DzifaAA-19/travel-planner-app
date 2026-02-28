import { useState } from 'react'
import { useTrips } from '../context/TripContext'
import { Link } from 'react-router-dom'

function BudgetPage() {
  const { trips, currentTrip, setCurrentTrip, updateTripBudget, addExpense, deleteExpense } = useTrips()
  const [showAddModal, setShowAddModal] = useState(false)
  const [showBudgetModal, setShowBudgetModal] = useState(false)
  const [newExpense, setNewExpense] = useState({
    name: '',
    category: 'food',
    amount: '',
    date: '',
    type: 'actual' // planned or actual
  })
  const [budgetAmount, setBudgetAmount] = useState('')

  // If no trips, show empty state
  if (trips.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">💰</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Trips to Track</h1>
          <p className="text-gray-600 mb-8">
            Create a trip first to start tracking your budget!
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

  // Calculate totals
  const calculateTotals = (trip) => {
    const expenses = trip.expenses || []
    const activities = trip.activities || []
    
    const plannedFromExpenses = expenses
      .filter(e => e.type === 'planned')
      .reduce((sum, e) => sum + parseFloat(e.amount || 0), 0)
    
    const plannedFromActivities = activities
      .reduce((sum, a) => sum + parseFloat(a.cost || 0), 0)
    
    const actualExpenses = expenses
      .filter(e => e.type === 'actual')
      .reduce((sum, e) => sum + parseFloat(e.amount || 0), 0)
    
    const totalPlanned = plannedFromExpenses + plannedFromActivities
    const totalActual = actualExpenses
    const totalBudget = trip.budget || 0
    const remaining = totalBudget - totalActual
    
    return { totalPlanned, totalActual, totalBudget, remaining }
  }

  // Calculate by category
  const calculateByCategory = (trip) => {
    const expenses = trip.expenses || []
    const categories = {
      food: 0,
      transport: 0,
      accommodation: 0,
      activity: 0,
      other: 0
    }
    
    expenses.forEach(expense => {
      if (expense.type === 'actual') {
        categories[expense.category] = (categories[expense.category] || 0) + parseFloat(expense.amount || 0)
      }
    })
    
    // Add from activities
    const activities = trip.activities || []
    activities.forEach(activity => {
      const category = activity.category || 'activity'
      categories[category] = (categories[category] || 0) + parseFloat(activity.cost || 0)
    })
    
    return categories
  }

  const handleAddExpense = () => {
    if (!newExpense.name || !newExpense.amount || !currentTrip) {
      alert('Please fill in all required fields')
      return
    }

    addExpense(currentTrip.id, newExpense)
    setNewExpense({ name: '', category: 'food', amount: '', date: '', type: 'actual' })
    setShowAddModal(false)
  }

  const handleSetBudget = () => {
    if (!budgetAmount || !currentTrip) return
    updateTripBudget(currentTrip.id, parseFloat(budgetAmount))
    setBudgetAmount('')
    setShowBudgetModal(false)
  }

  const totals = currentTrip ? calculateTotals(currentTrip) : {}
  const byCategory = currentTrip ? calculateByCategory(currentTrip) : {}

  const categoryIcons = {
    food: '🍽️',
    transport: '✈️',
    accommodation: '🏨',
    activity: '🎫',
    other: '💼'
  }

  const categoryColors = {
    food: 'bg-orange-100 text-orange-600',
    transport: 'bg-blue-100 text-blue-600',
    accommodation: 'bg-purple-100 text-purple-600',
    activity: 'bg-green-100 text-green-600',
    other: 'bg-gray-100 text-gray-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Budget Tracker</h1>
          <p className="text-gray-600">Manage your trip expenses and stay on budget</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Trip Selector */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4">Select Trip</h2>
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
                          {(trip.expenses || []).filter(e => e.type === 'actual').length} expenses
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {currentTrip && (
              <>
                {/* Budget Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Total Budget */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">Total Budget</h3>
                      <button 
                        onClick={() => {
                          setBudgetAmount(totals.totalBudget || '')
                          setShowBudgetModal(true)
                        }}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        {totals.totalBudget ? 'Edit' : 'Set'}
                      </button>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">${totals.totalBudget.toFixed(2)}</p>
                  </div>

                  {/* Total Spent */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Total Spent</h3>
                    <p className="text-3xl font-bold text-orange-600">${totals.totalActual.toFixed(2)}</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          totals.totalActual > totals.totalBudget ? 'bg-red-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${Math.min((totals.totalActual / totals.totalBudget) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Remaining */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Remaining</h3>
                    <p className={`text-3xl font-bold ${totals.remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${Math.abs(totals.remaining).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {totals.remaining >= 0 ? 'Under budget' : 'Over budget'}
                    </p>
                  </div>

                </div>

                {/* Budget Breakdown by Category */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Spending by Category</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(byCategory).map(([category, amount]) => (
                      <div key={category} className={`p-4 rounded-lg ${categoryColors[category]}`}>
                        <div className="text-3xl mb-2">{categoryIcons[category]}</div>
                        <p className="text-xs font-medium capitalize mb-1">{category}</p>
                        <p className="text-xl font-bold">${amount.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expenses List */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Expenses</h2>
                    <button 
                      onClick={() => setShowAddModal(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      + Add Expense
                    </button>
                  </div>

                  {(!currentTrip.expenses || currentTrip.expenses.length === 0) ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">No expenses recorded yet</p>
                      <button 
                        onClick={() => setShowAddModal(true)}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Add your first expense
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {(currentTrip.expenses || [])
                        .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
                        .map(expense => (
                          <div 
                            key={expense.id}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[expense.category]}`}>
                                <span className="text-2xl">{categoryIcons[expense.category]}</span>
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{expense.name}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                  <span className="capitalize">{expense.category}</span>
                                  {expense.date && <span>• {new Date(expense.date).toLocaleDateString()}</span>}
                                  <span className={`px-2 py-0.5 rounded text-xs ${
                                    expense.type === 'planned' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                                  }`}>
                                    {expense.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xl font-bold text-gray-900">${parseFloat(expense.amount).toFixed(2)}</span>
                              <button 
                                onClick={() => deleteExpense(currentTrip.id, expense.id)}
                                className="text-red-500 hover:text-red-700 p-2"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Activities from Itinerary */}
                {currentTrip.activities && currentTrip.activities.length > 0 && (
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">💡 Budget Tip</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      You have {currentTrip.activities.length} activities planned with estimated costs totaling ${totals.totalPlanned.toFixed(2)}.
                    </p>
                    <Link 
                      to="/trips"
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View your itinerary →
                    </Link>
                  </div>
                )}

              </>
            )}

          </div>

        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6">Add Expense</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expense Name *
                </label>
                <input 
                  type="text"
                  value={newExpense.name}
                  onChange={(e) => setNewExpense({...newExpense, name: e.target.value})}
                  placeholder="e.g., Lunch at cafe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select 
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="food">Food & Drinks</option>
                  <option value="transport">Transportation</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="activity">Activities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount ($) *
                </label>
                <input 
                  type="number"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input 
                  type="date"
                  value={newExpense.date}
                  onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select 
                  value={newExpense.type}
                  onChange={(e) => setNewExpense({...newExpense, type: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="actual">Actual Expense</option>
                  <option value="planned">Planned Expense</option>
                </select>
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
                onClick={handleAddExpense}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Set Budget Modal */}
      {showBudgetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6">Set Trip Budget</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Budget ($)
              </label>
              <input 
                type="number"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-2xl font-bold"
              />
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowBudgetModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleSetBudget}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Save Budget
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default BudgetPage