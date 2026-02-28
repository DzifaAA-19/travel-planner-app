import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import DestinationDetails from './pages/DestinationDetails'
import ItineraryPage from './pages/ItineraryPage'
import BudgetPage from './pages/BudgetPage'
import { TripProvider } from './context/TripContext'
import NotFound
 from './pages/NotFound'
function App() {
  return (
    <TripProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/trips" element={<ItineraryPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
    </TripProvider>
    
  )
}

export default App