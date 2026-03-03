# 🌍 Travel Planner App

A comprehensive travel planning application built with React, Tailwind CSS, and modern web technologies. Plan destinations, create itineraries, and manage travel budgets all in one place.

![Travel Planner](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)
![Status](https://img.shields.io/badge/Status-Live-success)

## 🚀 Live Demo

**[View Live App](https://travel-planner-app-zeta-snowy.vercel.app/)** ← Replace with your Vercel URL

## ✨ Features

### 🔍 Search & Discovery
- Search destinations by name or country
- Real-time filtering
- 6 pre-loaded destinations (Paris, Ghana, London, Tokyo, Dubai, Bali)
- Beautiful card-based layout

### 📍 Destination Details
- Comprehensive destination information
- Top attractions with descriptions
- Accommodation listings with pricing
- Real-time weather data via OpenWeather API
- Add destinations to trip planner

### 📅 Itinerary Management
- Create multiple trips with date ranges
- Calendar view with date selection
- Add activities with time, category, description, and cost
- Organize activities by date and time
- Delete and manage activities
- Trip summary statistics

### 💰 Budget Tracking
- Set trip budgets
- Track actual expenses by category
- Visual budget breakdown
- Planned vs actual spending comparison
- Category-based expense tracking (Food, Transport, Accommodation, Activities)
- Budget alerts (over/under budget indicators)

### 📱 Responsive Design
- Fully responsive on desktop, tablet, and mobile
- Mobile-optimized navigation
- Touch-friendly interface
- Works on all modern browsers

### 💾 Data Persistence
- LocalStorage integration
- Data survives page refresh
- No backend required

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI framework
- **React Router v6** - Navigation
- **Tailwind CSS v3** - Styling
- **Vite** - Build tool

### APIs
- **OpenWeather API** - Real-time weather data


### Tools
- **Git & GitHub** - Version control
- **Vercel** - Deployment
- **VS Code** - Development environment

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git


## 🎯 Usage

### Creating a Trip
1. Browse destinations on home page
2. Click on a destination card
3. Click "Add to My Trip"
4. Select start and end dates
5. Navigate to "My Trips" to manage itinerary

### Managing Itinerary
1. Go to "My Trips" page
2. Select a trip from sidebar
3. Click on a date in calendar
4. Click "+ Add Activity"
5. Fill in activity details
6. Activities appear in chronological order

### Tracking Budget
1. Go to "Budget" page
2. Select a trip
3. Click "Set Budget" to define total budget
4. Click "+ Add Expense" to log expenses
5. View spending breakdown by category
6. Monitor remaining budget

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Add environment variables
- Click "Deploy"

3. **Add Environment Variables in Vercel**
- Go to Project Settings → Environment Variables
- Add `VITE_OPENWEATHER_API_KEY` with your API key
- Redeploy if necessary

## 🧪 Testing

Run the production build locally:
```bash
npm run build
npm run preview
```

## 🐛 Known Issues

- Weather API requires 1-2 hours activation for new keys
- Mobile menu requires testing on actual devices
- LocalStorage has 5-10MB limit (sufficient for typical use)

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Cloud data sync
- [ ] Share trips with friends
- [ ] Google Maps integration
- [ ] Export itinerary as PDF
- [ ] Multi-currency support
- [ ] Flight and hotel booking integration
- [ ] Photo upload for trips
- [ ] Social features (trip reviews, ratings)

## 📝 License

This project was created as a capstone project for ALX

## 👤 Author

**Your Name**
- GitHub: [@DzifaAA-19](https://github.com/DzifaAA-19)

## 🙏 Acknowledgments

- OpenWeather API for weather data
- REST Countries API for country information
- Tailwind CSS for the utility-first CSS framework
- React team for the amazing framework
- [Your instructor/course] for guidance

## 📧 Contact

For questions or feedback, please open an issue on GitHub or contact [agbakpedzifaaku3@gmail.com]

---

**Built with ❤️ using React and Tailwind CSS**