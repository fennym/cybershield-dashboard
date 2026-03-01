import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('cybershield_token');
    if (token) setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">
          <span className="logo-icon">â¬¡</span>
          <span>CYBERSHIELD</span>
        </div>
        <div className="loading-bar"><div className="loading-progress" /></div>
      </div>
    );
  }

  return isAuthenticated
    ? <Dashboard onLogout={() => { localStorage.removeItem('cybershield_token'); setIsAuthenticated(false); }} />
    : <Login onLogin={() => { localStorage.setItem('cybershield_token', 'demo-jwt-token'); setIsAuthenticated(true); }} />;
}
