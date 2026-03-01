interface SidebarProps { activeSection: string; onNavigate: (s: string) => void; onLogout: () => void; }
const navItems = [
  { id: 'overview', label: 'Overview', icon: 'â—ˆ' },
  { id: 'threats', label: 'Threat Intel', icon: 'âš ' },
  { id: 'accounts', label: 'Accounts', icon: 'â—‰' },
  { id: 'remediation', label: 'Remediation', icon: 'â¬Ÿ' },
  { id: 'reports', label: 'Reports', icon: 'â–¦' },
  { id: 'settings', label: 'Settings', icon: 'âš™' },
];
export default function Sidebar({ activeSection, onNavigate, onLogout }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="hex-icon">â¬¡</span>
        <div><span className="logo-title">CYBERSHIELD</span><span className="logo-sub">v2.4.1</span></div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button key={item.id} className={
av-item } onClick={() => onNavigate(item.id)}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {activeSection === item.id && <span className="nav-indicator" />}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="system-status"><span className="status-dot" /><span>All Systems Operational</span></div>
        <button className="logout-btn" onClick={onLogout}><span>âŽ‹</span> Logout</button>
      </div>
    </aside>
  );
}
