import './App.css'
import LandingPage from "./components/LandingPage";
import BrowsePage from "./components/BrowsePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/browse" element={<BrowsePage />} />
          </Routes>
      </Router>
  )
}

export default App
