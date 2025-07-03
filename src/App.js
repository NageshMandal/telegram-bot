import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import BotSettings from './pages/BotSettings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Routes>
            <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="/users" element={<Users onLogout={handleLogout} />} />
            <Route path="/bot-settings" element={<BotSettings onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
