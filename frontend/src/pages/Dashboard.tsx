import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { RiskScore, CompromisedAccount, RemediationAction, ThreatMetric, ChartDataPoint } from '../types';
import MetricCard from '../components/MetricCard';
import RiskScoreTable from '../components/RiskScoreTable';
import CompromisedAccountsTable from '../components/CompromisedAccountsTable';
import RemediationTracker from '../components/RemediationTracker';
import ThreatChart from '../components/ThreatChart';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

interface DashboardProps { onLogout: () => void; }

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [metrics, setMetrics] = useState<ThreatMetric[]>([]);
  const [riskScores, setRiskScores] = useState<RiskScore[]>([]);
  const [accounts, setAccounts] = useState<CompromisedAccount[]>([]);
  const [actions, setActions] = useState<RemediationAction[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.getThreatMetrics(), api.getRiskScores(), api.getCompromisedAccounts(), api.getRemediationActions(), api.getChartData()])
      .then(([m, r, a, rem, c]) => { setMetrics(m); setRiskScores(r); setAccounts(a); setActions(rem); setChartData(c); setLoading(false); });
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} onLogout={onLogout} />
      <main className="dashboard-main">
        <TopBar />
        {loading ? (
          <div className="dashboard-loading"><div className="pulse-ring" /><p>LOADING THREAT INTELLIGENCE...</p></div>
        ) : (
          <div className="dashboard-content">
            <section className="metrics-grid">
              {metrics.map((m, i) => <MetricCard key={i} metric={m} index={i} />)}
            </section>
            <section className="dashboard-row">
              <div className="chart-panel">
                <div className="panel-header">
                  <h2>THREAT TIMELINE <span>30 days</span></h2>
                  <div className="legend">
                    <span className="legend-item green">Risk Score</span>
                    <span className="legend-item red">Threats</span>
                    <span className="legend-item blue">Resolved</span>
                  </div>
                </div>
                <ThreatChart data={chartData} />
              </div>
              <div className="risk-panel">
                <div className="panel-header"><h2>CYBER RISK RATINGS</h2><span className="live-badge">â— LIVE</span></div>
                <RiskScoreTable scores={riskScores} />
              </div>
            </section>
            <section className="dashboard-row single">
              <div className="full-panel">
                <div className="panel-header">
                  <h2>COMPROMISED ACCOUNTS <span className="count-badge">{accounts.filter(a => !a.remediated).length} Active</span></h2>
                </div>
                <CompromisedAccountsTable accounts={accounts} />
              </div>
            </section>
            <section className="dashboard-row single">
              <div className="full-panel">
                <div className="panel-header">
                  <h2>REMEDIATION TRACKER</h2>
                  <div className="status-summary">
                    <span className="tag open">{actions.filter(a => a.status === 'open').length} Open</span>
                    <span className="tag progress">{actions.filter(a => a.status === 'in-progress').length} In Progress</span>
                    <span className="tag resolved">{actions.filter(a => a.status === 'resolved').length} Resolved</span>
                  </div>
                </div>
                <RemediationTracker actions={actions} />
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
