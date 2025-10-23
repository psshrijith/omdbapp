import './App.css'
import LandingPage from "./components/LandingPage";
import BrowsePage from "./components/BrowsePage";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

function App() {

    const [isAuthenticated, setIsAuthenticated]  = useState(false);

    useEffect(() => {
        const loggedIn=localStorage.getItem("isLoggedIn") === 'true';
        setIsAuthenticated(loggedIn);

        const handleStorageChange = () => {
            const loggedIn = localStorage.getItem("isLoggedIn") === 'true';
            setIsAuthenticated(loggedIn);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

  return (
      <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LandingPage />} />
              <Route path="/browse" element={isAuthenticated ? <BrowsePage /> : <Navigate to="/home" replace/>} />
          </Routes>
      </Router>
  )
}

export default App
