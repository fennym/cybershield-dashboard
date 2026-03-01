import { useState } from 'react';

interface LoginProps { onLogin: () => void; }

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); setError('');
    await new Promise((r) => setTimeout(r, 1200));
    if (email === 'admin@cybershield.io' && password === 'Shield@2024') {
      onLogin();
    } else {
      setError('Invalid credentials. Try admin@cybershield.io / Shield@2024');
    }
    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-bg">
        <div className="grid-overlay" />
        {[...Array(6)].map((_, i) => <div key={i} className={orb orb-} />)}
      </div>
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="hex-icon">â¬¡</span>
            <div><h1>CYBERSHIELD</h1><p>Security Intelligence Platform</p></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@cybershield.io" required />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" required />
          </div>
          {error && <div className="login-error">âš  {error}</div>}
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? <span className="btn-loading"><span />AUTHENTICATING...</span> : 'SECURE LOGIN'}
          </button>
        </form>
        <div className="login-footer">
          <span>ðŸ”’ JWT Secured</span><span>OWASP Compliant</span><span>PCI DSS Ready</span>
        </div>
      </div>
    </div>
  );
}
