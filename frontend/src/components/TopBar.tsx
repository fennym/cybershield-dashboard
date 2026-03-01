import { useState, useEffect } from 'react';
export default function TopBar() {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">Security Intelligence Dashboard</h1>
        <span className="breadcrumb">Overview / Real-time Monitoring</span>
      </div>
      <div className="topbar-right">
        <div className="threat-level"><span className="threat-dot" /><span>THREAT LEVEL: <strong>ELEVATED</strong></span></div>
        <div className="clock">{time.toLocaleTimeString('en-US', { hour12: false })}<span>{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span></div>
        <div className="user-avatar"><span>AS</span></div>
      </div>
    </header>
  );
}
