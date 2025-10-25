import './App.css'
import LandingPage from "./components/LandingPage";
import BrowsePage from "./components/BrowsePage";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === 'true';
        if (loggedIn !== isAuthenticated) {
            setIsAuthenticated(loggedIn);
        }
    }, [isAuthenticated]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route 
                    path="/home" 
                    element={
                        isAuthenticated ? 
                        <Navigate to="/browse" replace /> : 
                        <LandingPage onLoginSuccess={() => setIsAuthenticated(true)} />
                    } 
                />
                <Route 
                    path="/browse" 
                    element={
                        isAuthenticated ? 
                        <BrowsePage /> : 
                        <Navigate to="/home" replace />
                    } 
                />
            </Routes>
        </Router>
    )
}

export default App
